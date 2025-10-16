import prisma from "../prisma/client";

export const createBooking = async (data: any) => {
    const booking = await prisma.booking.create({
        data
    });
    return booking;
}