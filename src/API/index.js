import Axios from "axios";

export const getRecentMovieAPI = async (api, query) =>
  await Axios.get(
    `https://www.omdbapi.com/?apikey=${api}&s=${query}&type=movie`
  );

export const getTopMovieAPI = async (api, query) =>
  await Axios.get(`https://www.omdbapi.com/?apikey=${api}&s=${query}`);
