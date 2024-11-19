import axios from "axios";

const controller = "Marketing/";
const api = process.env.REACT_APP_API_URL;

const CreateProject = async (data) => {
  try {
    const result = await axios.post(`${api}${controller}CreateProject`, data);
    console.log("Result:", result);
    console.log("Result Data:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in CreateProject:", e.message);
    return e.message;
  }
};

const UpdateProject = async (id, data) => {
  try {
    const result = await axios.put(
      `${api}${controller}UpdateProject/${id}`,
      data
    );
    console.log("Update Result:", result);
    console.log("Update Result Data:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in UpdateProject:", e.message);
    return e.message;
  }
};

// Placeholder for delete functionality
const DeleteProject = async (id) => {
  try {
    const result = await axios.delete(`${api}${controller}DeleteProject/${id}`);
    console.log("Delete Result:", result);
    return result.data;
  } catch (e) {
    console.error("Error in DeleteProject:", e.message);
    return e.message;
  }
};

// Placeholder to get all projects
const Projects = async () => {
  try {
    const result = await axios.get(`${api}${controller}GetProjects`);
    console.log("Projects:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in Projects:", e.message);
    return e.message;
  }
};

// Placeholder to get a project by ID
const AccessProjectById = async (id) => {
  try {
    const result = await axios.get(`${api}${controller}GetProjectById/${id}`);
    console.log("Project by ID:", result.data);
    return result.data;
  } catch (e) {
    console.error("Error in AccessProjectById:", e.message);
    return e.message;
  }
};

export {
  CreateProject,
  UpdateProject,
  DeleteProject,
  Projects,
  AccessProjectById,
};
