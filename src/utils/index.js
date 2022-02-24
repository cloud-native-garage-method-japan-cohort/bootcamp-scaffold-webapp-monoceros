import axios from 'axios';
import { useAsync } from 'react-use';

const API_ENDPOINT = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

export let state;

export const useDiscovery = (searchText) => {
  state = useAsync(async () => {
    const response = await api.get('/api/search', {
      params: {
        query: searchText
      }
    });
    return response;
  }, [searchText]);
};
