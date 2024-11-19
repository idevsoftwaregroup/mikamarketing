import axios from "axios";

const controller = "Marketing/";
const api = process.env.REACT_APP_API_URL;

const CreateProfile = async (data) => {
  try {
    const result = await axios.post(`${api}${controller}CreateProfile`, data);
    console.log("Result:", result);
    console.log("Result Data:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in CreateProfile:", e.message);
    return e.message;
  }
};

const UpdateProfile = async (id, data) => {
  try {
    const result = await axios.put(
      `${api}${controller}UpdateProfile/${id}`,
      data
    );
    console.log("Update Result:", result);
    console.log("Update Result Data:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in UpdateProfile:", e.message);
    return e.message;
  }
};

// Placeholder for delete functionality
const DeleteProfile = async (id) => {
  try {
    const result = await axios.delete(`${api}${controller}DeleteProfile/${id}`);
    console.log("Delete Result:", result);
    return result.data;
  } catch (e) {
    console.error("Error in DeleteProfile:", e.message);
    return e.message;
  }
};

// Placeholder to get all Profiles
const Profiles = async () => {
  try {
    const result = await axios.get(`${api}${controller}GetAllUserProfiles`);
    console.log("Profiles:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in Profiles:", e.message);
    return e.message;
  }
};

// Placeholder to get a Profile by ID
const AccessProfileById = async (id) => {
  try {
    const result = await axios.get(`${api}${controller}GetUserProfile/${id}`);
    console.log("Profile by ID:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in AccessProfileById:", e.message);
    return e.message;
  }
};

export {
  CreateProfile,
  UpdateProfile,
  DeleteProfile,
  Profiles,
  AccessProfileById,
};
