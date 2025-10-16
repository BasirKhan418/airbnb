import express from 'express';
import Pingrouter from './ping.router';
import hotelRouter from './hotel.router';
const V1router = express.Router();


V1router.use('/ping', Pingrouter);
V1router.use('/hotels', hotelRouter);
export default V1router;