const key = '692e267ea5d292931da8020a01bb116c'

const requests = {
  requestPop: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTop: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrend: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcomming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`
}

export default requests
