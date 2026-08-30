import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function fetchVendors() {
  const { data } = await api.get('/vendors');
  return data.data;
}