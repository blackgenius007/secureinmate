import axios from 'axios';

const API_URL_REGISTER = '/api/v1/inmate/create';
const API_URL_RETRIEVE = '/api/v1/inmates';

// Register inmate
const register = async (formData, inmateId) => {
  console.log('inmate-service =>', inmateId)
  const response = await axios.post(`${API_URL_REGISTER}/${inmateId}`, formData);

  return response.data;
};

// Retrieve all inmates
const retrieveInmates = async () => {
  const response = await axios.get(API_URL_RETRIEVE);

  return response.data;
};

const inmateService = {
  register,
  retrieveInmates,
};

export default inmateService;
