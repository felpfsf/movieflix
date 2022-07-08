import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import Movie from './Movie'



const MoviesRow = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchURL])

  // console.log(movies);

  const slideToLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideToRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideToLeft}
          className='absolute left-0 z-10 hidden bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer group-hover:block' size={40} />
        <div id={'slider' + rowID} className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideToRight}
          className='absolute right-0 z-10 hidden bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer group-hover:block' size={40} />
      </div>
    </>
  )
}

export default MoviesRow