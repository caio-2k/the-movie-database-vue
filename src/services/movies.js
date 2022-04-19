export default (httpClient) => ({
  getPopularMovie: async () => {
    const response = await httpClient.get("/3/movie/popular");

    return {
      data: response.data,
    };
  },
});
