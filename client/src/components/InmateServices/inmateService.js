import axios from 'axios';

const API_URL_REGISTER = '/api/v1/inmate/create';
const API_URL_RETRIEVE = '/api/v1/inmate/inmates';
const API_URL_DETAIL = '/api/v1/inmate/detail';

// Register inmate
const register = async (formData, inmateId) => {
  console.log('inmate-service =>', inmateId)
  const response = await axios.post(`${API_URL_REGISTER}/${inmateId}`, formData);

  return response.data;
};

// Retrieve all inmates
const retrieveInmates = async () => {
  const response = await axios.get(API_URL_RETRIEVE);
console.log('inmate retrieved=>',response)
  return response.data;
};

// Retrieve a single inmate
const retrieveInmate = async (inmateNum) => {
  const response = await axios.get(`${API_URL_DETAIL}/${inmateNum}`);

  return response.data;
};

const inmateService = {
  register,
  retrieveInmates,
  retrieveInmate,
};

export default inmateService;
