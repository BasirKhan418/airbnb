import prisma from "../prisma/client";

export const createBooking = async (data: any) => {
    const booking = await prisma.booking.create({
        data
    });
    return booking;
}
export async function createIdempotencyKey(key: string, bookingId: number) {
    const idempotencyKey = await prisma.idempotencyKey.create({
        data: {
            key,
            booking: {
                connect: {
                    id: bookingId
                }
            }
        }
    });

    return idempotencyKey;
}

export async function getIdempotencyKey(key: string) {
    const idempotencyKey = await prisma.idempotencyKey.findUnique({
        where: {
            key
        }
    });

    return idempotencyKey;
}

export async function getBookingById(bookingId: number) {
    const booking = await prisma.booking.findUnique({
        where: {
            id: bookingId
        }
    });

    return booking;
}

export async function confirmBooking(bookingId: number) {
    const booking = await prisma.booking.update({
        where: {
            id: bookingId
        },
        data: {
            status: "CONFIRMED"
        }
    });
    return booking;
} 

export async function cancelBooking(bookingId: number) {
    const booking = await prisma.booking.update({
        where: {
            id: bookingId
        },
        data: {
            status: "CANCELLED"
        }
    });
    return booking;
}

export async function finalizeIdempotencyKey(key: string) {
    const idempotencyKey = await prisma.idempotencyKey.update({
        where: {
            key
        },
        data: {
            finalized: true
        }
    });

    return idempotencyKey;
}

