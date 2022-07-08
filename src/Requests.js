const key = import.meta.env.VITE_TMDB_KEY

const requests = {
  requestPop: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1&include_adult=false`,
  requestTop: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&include_adult=false`,
  requestTrend: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2&include_adult=false`,
  requestUpcomming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1&include_adult=false`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`
}

export default requests
