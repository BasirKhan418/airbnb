import { Request,Response } from "express";
import { createBookingService,confirmBookingService } from "../services/booking.service";

export const createBookingController = async (req:Request,res:Response) => {
    const booking = await createBookingService(req.body);
    res.status(201).json({bookingId:booking.bookingId, idempotencyKey:booking.idempotencyKey});
}

export const confirmBookingController = async (req:Request,res:Response) => {
    const { idempotencyKey } = req.params;
    const booking = await confirmBookingService(idempotencyKey);
    res.status(200).json({
        bookingId: booking.id,
        status: booking.status,
    });
}