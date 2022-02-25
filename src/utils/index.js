import axios from 'axios';
import { useRef, useEffect } from 'react';
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
  const isFirstRender = useRef(false);

  useEffect(() => {
    // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true;
  }, []);
  state = useAsync(async () => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else {
      try {
        const response = await api.get('/api/search', {
          params: {
            query: searchText
          }
        });
        return response;
      } catch (error) {
        let msg = '';
        if (error.response && error.response.data && error.response.data.results[0]) {
          msg = ' : ' + error.response.data.results[0].content;
        }
        alert('エラーです。' + msg);
      }
    }
  }, [searchText]);
};
