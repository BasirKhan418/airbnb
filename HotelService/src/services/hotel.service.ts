import { createHotelDto } from "../dto/hotel.dto";
import { createHotel,getHotelById ,getAllHotels,deleteHotelById} from "../repositories/hotel.repository";

const createHotelService = async (hotelData: createHotelDto) => {
    try{
        const hotel = await createHotel(hotelData);
        return hotel;
    }
    catch (error) {
        throw new Error("Error creating hotel");
    }
}

const getHotelByIdService = async (id: number) => {
    try {
        const hotel = await getHotelById(id);
        return hotel;
    } catch (error) {
        throw new Error("Error fetching hotel");
    }
};

const getAllHotelsService = async () => {
    try {
        const hotels = await getAllHotels();
        return hotels;
    } catch (error) {
        throw new Error("Error fetching hotels");
    }
};

const deleteHotelByIdService = async (id: number) => {
    try {
        const hotel = await deleteHotelById(id);
        return hotel;
    } catch (error) {
        throw new Error("Error deleting hotel");
    }
};

export { createHotelService, getHotelByIdService ,getAllHotelsService, deleteHotelByIdService };