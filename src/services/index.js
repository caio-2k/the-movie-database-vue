// Service layer to make HTTP requests

import axios from "axios";
import moviesServices from "./movies";

const API_ENVS = {
  production: "https://api.themoviedb.org/",
  development: "",
  local: "https://api.themoviedb.org/",
};

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local,
  timeout: 5000,
  params: {
    api_key: '7b92ce4b29c2f82ac344afe3aece56f1',
  },
});

export default {
  movies: moviesServices(httpClient),
};
