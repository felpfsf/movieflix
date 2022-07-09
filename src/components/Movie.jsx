import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebaseConfig'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'

const Movie = ({ item }) => {
  const [like, setLike] = useState(false)

  const [saved, setSaved] = useState(false)

  const { user } = UserAuth()

  // Referencing the user email to the DB the movies that the users liked
  const movieID = doc(db, 'users', `${user?.email}`)

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    } else {
      alert('Please log in to like the movie')
    }
  }


  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative p-4 inline-block cursor-pointer'>
      <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='text-xs text-center md:text-sm font-bold whitespace-normal h-full flex items-center justify-center'>
          {item?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className='text-gray-300 absolute top-5 left-5' />
          ) : (
            <FaRegHeart className='text-gray-300 absolute top-5 left-5' />
          )}
        </p>
      </div>
    </div>
  )
}

export default Movie