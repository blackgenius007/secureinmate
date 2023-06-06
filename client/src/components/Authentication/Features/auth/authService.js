import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const API_URL_R = '/api/v1/authV2/registerV2'
const API_URL_L = '/api/v1/authV2/loginV2'


// Register user
const register = async (FormData) => {
  console.log('auth-service =>',FormData)
  const response = await axios.post(API_URL_R,FormData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL_L , userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = (navigate) => {
  localStorage.removeItem('user');
  navigate('/'); // Redirect to home route
};

const authService = {
  register,
  logout,
  login,
}

export default authService