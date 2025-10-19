import { CreateBookingDTO } from "../dto/booking.dto";
import { confirmBooking, createBooking, createIdempotencyKey, finalizeIdempotencyKey, getIdempotencyKey } from "../repositories/booking.repository";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";
import { generateIdempotencyKey } from "../utils/generateIdempotencyKey";


// createBookingService
export async function createBookingService(createBookingDTO:CreateBookingDTO) {
const booking = await createBooking({
    userId: createBookingDTO.userId,
    hotelId: createBookingDTO.hotelId,
    totalGuest: createBookingDTO.totalGuests,
    bookingAmount: createBookingDTO.bookingAmount
})
const idempotencyKey = generateIdempotencyKey();
await createIdempotencyKey(idempotencyKey, booking.id);
return { bookingId: booking.id, idempotencyKey };
}
//confirmBookingService
export async function confirmBookingService(idempotencyKey:string) {
    const idempotencykey = await getIdempotencyKey(idempotencyKey);
    if (!idempotencykey) {
        throw new NotFoundError("Idempotency key not found");
    }
    if(idempotencykey.finalized){
        throw new BadRequestError("This operation has already been finalized");
    }
    const booking = await confirmBooking(idempotencykey.bookingId);
    await finalizeIdempotencyKey(idempotencyKey);
    return booking;

}