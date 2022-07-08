import Main from '../components/Main'
import MoviesRow from '../components/MoviesRow'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <MoviesRow rowID='upComing' title='Up Coming' fetchURL={requests.requestUpcomming} />
      <MoviesRow rowID='topMovies' title='Top Movies' fetchURL={requests.requestTop} />
      <MoviesRow rowID='trending' title='Trending Now' fetchURL={requests.requestTrend} />
      <MoviesRow rowID='pop' title='Most Populars' fetchURL={requests.requestPop} />
      <MoviesRow rowID='action' title='Action Movies' fetchURL={requests.requestAction} />
    </>
  )
}

export default Home