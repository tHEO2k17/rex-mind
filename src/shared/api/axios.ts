import axios from 'axios';
import Cookies from 'js-cookie';
import { env } from '@/config/env';

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    // Only access cookies on the client side
    if (typeof window !== 'undefined') {
      const token = Cookies.get('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    // Log the error for observability (senior practice)
    console.error(`[API Error]: ${message}`, { 
      status: error.response?.status,
      url: error.config?.url 
    });
    return Promise.reject(new Error(message));
  }
);
