import axios from "axios";

const appUrl = process.env.REACT_APP_APPURL;
const apiKey = "6d8e85db162e12c932c7d15dc61097c6";
const getMovieList = async() => {
  const movie = await axios.get(`${appUrl}/movie/top_rated?api_key=${apiKey}&page=1&language=id`);
  return movie.data.results;
}

const searchMovie = async(q) => {
  const seacrh = await axios.get(`${appUrl}/search/movie?query=${q}&api_key=${apiKey}&page=1&language=id`);
  return seacrh.data;
}

export { getMovieList, searchMovie }