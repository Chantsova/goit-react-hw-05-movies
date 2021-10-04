import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '11304596cde43fc3f81ad87a0a757742';

export function getTrendingMovie() {
  return axios.get(`/trending/all/day?api_key=${KEY}`);
}

export function getMovieById(id) {
  return axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`);
}

export function getMoviesByQuery(query) {
  return axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
}

export function getMovieCast(id) {
  return axios.get(`/movie/${id}/credits?api_key=${KEY}&language=en-US`);
}

export function getMovieReview(id) {
  return axios.get(`/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
}
