import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import requests from '../Requests'

const Main = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPop).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  // console.log(movie);

  const truncateText = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <div className='text-white w-full h-[550px]'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movies?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='py-2 px-5 text-black bg-gray-300 border border-gray-300'>Play</button>
            <button className='py-2 px-5 ml-4 text-white border border-gray-300'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateText(movie?.overview, 150)}</p>
        </div>

      </div>
    </div>
  )
}

export default Main