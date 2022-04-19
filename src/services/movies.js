export default (httpClient) => ({
  getPopularMovie: async () => {
    const response = await httpClient.get("/3/movie/popular");

    return {
      data: response.data,
    };
  },


  // TODO: SAVE IT IN STORE
  getMovieGenres: async () => {
    const response = await httpClient.get("/3/genre/movie/list");

    return {
      data: response.data,
    };
  },
});
