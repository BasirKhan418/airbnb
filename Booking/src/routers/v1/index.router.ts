import express from 'express';
import Pingrouter from './ping.router';
import bookingRouter from './booking.router';
const V1router = express.Router();


V1router.use('/ping', Pingrouter);
V1router.use('/bookings', bookingRouter);

export default V1router;