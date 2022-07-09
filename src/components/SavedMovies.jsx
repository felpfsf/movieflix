import { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebaseConfig'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'

const SavedMovies = () => {

  const [movies, setMovies] = useState([])

  const { user } = UserAuth()

  const movieRef = doc(db, 'users', `${user?.email}`)


  const slideToLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideToRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const deleteMovie = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID)
      await updateDoc(movieRef, {
        savedMovies: result
      })
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies)
    })
  }, [user?.email])

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My Movies</h2>
      <div className='relative flex items-center group'>

        <MdChevronLeft
          onClick={slideToLeft}
          className='absolute left-0 z-10 hidden bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer group-hover:block'
          size={40}
        />

        <div
          id={'slider'}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative p-4 inline-block cursor-pointer'>
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item.title}
              />

              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='text-xs text-center md:text-sm font-bold whitespace-normal h-full flex items-center justify-center'>
                  {item?.title}
                </p>
                <p onClick={() => deleteMovie(item.id)} className='text-gray-300 absolute top-4 right-4'><AiOutlineClose /></p>
              </div>

            </div>
          ))}
        </div>

        <MdChevronRight
          onClick={slideToRight}
          className='absolute right-0 z-10 hidden bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer group-hover:block'
          size={40}
        />
      </div>
    </>
  )
}

export default SavedMovies