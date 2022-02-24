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

export const queryDiscovery = (searchText) => {
  //   const res = {
  //     data: {
  //      results: [
  //     {title: "タイトル1", content: "これはコンテンツです1"},
  //     {title: "タイトル2", content: "これはコンテンツです2"},
  //     {title: "タイトル3", content: "これはコンテンツです3"},
  //   ]
  // }
  //   }
  //   return res;
  state = useAsync(async () => {
    const response = await api.get('/api/search', {
      params: {
        query: searchText
      }
    });
    // const result = await response.text();
    return response;
  }, [searchText]);
  // return state;
  // return await api.get('/api/search', {
  //   params: {
  //     query: searchText
  //   }
  // });
};
