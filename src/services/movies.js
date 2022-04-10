export default (httpClient) => ({
    getPopularMovie: async ({ api_key }) => {
        const query = { api_key }

        const response = await httpClient.get('/3/movie/popular', {
            params: query,
        })

        return {
            data: response.data,
        }
    },
})
