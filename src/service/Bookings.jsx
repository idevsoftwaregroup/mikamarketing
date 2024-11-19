import axios from "axios";

const controller = "Marketing/";
const api = process.env.REACT_APP_API_URL;

const CreateBooking = async (bookingData) => {
  try {
    const response = await axios.post(
      `${api}${controller}CreateBookings`,
      bookingData
    ); // استفاده از POST برای ارسال داده‌ها
    return response;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

const UpdateBooking = async (id, data) => {
  try {
    const result = await axios.put(
      `${api}${controller}UpdateBooking/${id}`,
      data
    );
    console.log("Update Result:", result);
    console.log("Update Result Data:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in UpdateBooking:", e.message);
    return e.message;
  }
};

// Placeholder for delete functionality
const DeleteBooking = async (id) => {
  try {
    const result = await axios.delete(`${api}${controller}DeleteBooking/${id}`);
    console.log("Delete Result:", result);
    return result.data;
  } catch (e) {
    console.error("Error in DeleteBooking:", e.message);
    return e.message;
  }
};

// Placeholder to get all Bookings
const Bookings = async () => {
  try {
    const result = await axios.get(`${api}${controller}GetAllBookings`);
    console.log("Bookings:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in Bookings:", e.message);
    return e.message;
  }
};

// Placeholder to get a Booking by ID
const AccessBookingById = async (id) => {
  try {
    const result = await axios.get(`${api}${controller}GetBookingById/${id}`);
    console.log("Booking by ID:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in AccessBookingById:", e.message);
    return e.message;
  }
};

// Placeholder to get a Booking by NationalID
const AccessBookingByNationalId = async (nationalId) => {
  try {
    const result = await axios.get(
      `${api}${controller}GetBookingByNationalId/${nationalId}`
    );
    console.log("Booking by NAtional Id:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in AccessBookingByNationalId:", e.message);
    return e.message;
  }
};

export {
  CreateBooking,
  UpdateBooking,
  DeleteBooking,
  Bookings,
  AccessBookingById,
  AccessBookingByNationalId,
};
