// Service layer to make HTTP requests

import axios from 'axios'
import moviesServices from './movies'

const API_ENVS = {
    production: 'https://api.themoviedb.org/',
    development: '',
    local: 'https://api.themoviedb.org/',
}

const httpClient = axios.create({
    baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local,
})

export default {
    movies: moviesServices(httpClient),
}
