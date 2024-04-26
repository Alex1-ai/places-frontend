import axios from "axios";
import { APIBASEURL} from "../utils/constants";

const getAllPlaces = async (params) => {
  try {
    const response = await axios.get(`${APIBASEURL}/${params}`);
    console.log("Response     data    ", response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Propagate the error to the caller
  }
};

const createPlace =  async (  newObject) => {

    const response = await axios.post(`${APIBASEURL}/places`,newObject)
    return response.data
}
const uploadImage = async (id, image) =>{
  const response = await axios.put(`${APIBASEURL}/places/${id}/photo`, image );
  return response.data
}

const getPlaceById = async (id) =>{
  const response = await axios.get(`${APIBASEURL}/places/${id}`);
  return response.data

}

const deletePlaceById = async (id) =>{
  const response = await axios.delete(`${APIBASEURL}/places/${id}`);
  return response.data

}

const updatePlaceById = async (id, data ) =>{
  const response = await axios.put(`${APIBASEURL}/places/${id}`, data)
  return response.data
}

const api = {
  getAllPlaces,
  uploadImage,
  createPlace,
  getPlaceById,
  deletePlaceById,
  updatePlaceById
};

export default api;
