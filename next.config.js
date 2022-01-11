const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=eko&page=1`,
      },
      {
        source: "/api/movies/upcoming",
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko&page=1`,
      },
    ];
  },
};
