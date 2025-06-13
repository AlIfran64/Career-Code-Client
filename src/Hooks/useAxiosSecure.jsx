import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import { toast } from 'react-toastify';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/'
})



const useAxiosSecure = () => {

  const { user, logout } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`
    return config;
  })

  // response
  axiosInstance.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.status === 401 || error.status === 403) {
      logout()
        .then(() => {
          toast.success('Session expired, please login again');
        })
        .catch((err) => {
          toast.error('Failed to log out, please try again', err);
        });
    }
    return Promise.reject(error);
  })

  return axiosInstance;
};

export default useAxiosSecure;