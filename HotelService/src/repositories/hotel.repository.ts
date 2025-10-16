import Hotel from "../db/models/hotel";
import { createHotelDto } from "../dto/hotel.dto";

const createHotel = async (hotelData: createHotelDto) => {
  try {
    const hotel = await Hotel.create(hotelData);
    return hotel;
  } catch (error) {
    throw new Error("Error creating hotel");
  }
};

const getHotelById = async (id: number) => {
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error("Hotel not found");
    }
    return hotel;
  } catch (error) {
    throw new Error("Error fetching hotel");
  }
};

const getAllHotels = async () => {
  try {
    const hotels = await Hotel.findAll();
    return hotels;
  } catch (error) {
    throw new Error("Error fetching hotels");
  }
};


const deleteHotelById = async (id: number) => {
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error("Hotel not found");
    }
    let date = new Date();
    hotel.deletedAt = date; // Set the deletedAt field to the current date
    await hotel.save(); // Save the changes to the database
    return hotel;
  } catch (error) {
    throw new Error("Error deleting hotel");
  }
}


export { createHotel, getHotelById, getAllHotels ,deleteHotelById};
