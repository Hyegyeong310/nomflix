import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

const API_KEY = 'c4bc936a3f5d50dcf78ebe33563e21c2';
const LANG = 'en-US';
const params = `?api_key=${API_KEY}&language=${LANG}`;

api.get(`tv/popular${params}`);

export const moviesApi = {
  nowPlaying: () => api.get(`movie/now_playing${params}`),
  upcoming: () => api.get(`movie/upcoming${params}`),
  popular: () => api.get(`movie/popular${params}`),
  movieDetail: id =>
    api.get(`movie/${id}${params}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: term =>
    api.get(`search/movie${params}`, {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get(`tv/top_rated${params}`),
  popular: () => api.get(`tv/popular${params}`),
  airingToday: () => api.get(`tv/airing_today${params}`),
  showDetail: id =>
    api.get(`tv/${id}${params}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: term =>
    api.get(`search/tv${params}`, {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
