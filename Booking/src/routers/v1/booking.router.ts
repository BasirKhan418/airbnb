import express from 'express';
import { ValidateRequestBody } from '../../validators';
import { createBookingValidator } from '../../validators/booking.validator';
import { createBookingController,confirmBookingController } from '../../controllers/booking.controller';

const bookingRouter = express.Router();

bookingRouter.post('/', ValidateRequestBody(createBookingValidator), createBookingController);
bookingRouter.post('/confirm/:idempotencyKey', confirmBookingController);


export default bookingRouter;