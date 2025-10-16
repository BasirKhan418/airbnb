export type createHotelDto = {
    name: string;
    address: string;
    location: string;
    rating?: number; // Optional field for hotel rating
    ratingCount?: number; // Optional field for number of ratings
}