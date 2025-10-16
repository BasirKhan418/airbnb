import express from 'express';
import { createHotelController, getHotelByIdController,getAllHotelsController,deleteHotelByIdController } from '../../controllers/hotel.controller';
import { ValidateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();
hotelRouter.post('/', ValidateRequestBody(hotelSchema), createHotelController);
hotelRouter.get('/:id', getHotelByIdController);
hotelRouter.get('/', getAllHotelsController);
hotelRouter.delete('/:id', deleteHotelByIdController);

export default hotelRouter;

