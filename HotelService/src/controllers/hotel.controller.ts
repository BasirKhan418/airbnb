
import { createHotelService,getHotelByIdService,getAllHotelsService,deleteHotelByIdService } from "../services/hotel.service";
import { Request, Response ,NextFunction} from "express";
import { StatusCodes } from "http-status-codes";
const createHotelController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelData = req.body;
        const hotel = await createHotelService(hotelData);
        res.status(StatusCodes.CREATED).json({data: hotel, message: "Hotel created successfully",success: true});
    } catch (error) {
        next(error);
    }
};

const getHotelByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotel = await getHotelByIdService(Number(req.params.id));
        res.status(StatusCodes.OK).json({data: hotel, message: "Hotel fetched successfully", success: true});
    } catch (error) {
        next(error);
    }
};

const getAllHotelsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotels = await getAllHotelsService();
        res.status(StatusCodes.OK).json({data: hotels, message: "Hotels fetched successfully", success: true});
    } catch (error) {
        next(error);
    }
};

const deleteHotelByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotel = await deleteHotelByIdService(Number(req.params.id));
        res.status(StatusCodes.OK).json({data: hotel, message: "Hotel deleted successfully", success: true});
    } catch (error) {
        next(error);
    }
};

export { createHotelController, getHotelByIdController, getAllHotelsController, deleteHotelByIdController };
