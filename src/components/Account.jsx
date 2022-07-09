import React from 'react'
import SavedMovies from './SavedMovies'

const Account = () => {
  return (
    <>
      <div className='text-white w-full'>
        <img className=' w-full h-[400px] object-cover' src="../src/assets/images/bg-signup.jpg" alt="/" />
        <div className='fixed top-0 left-0 w-full h-[550px] bg-black/60'></div>

        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  )
}

export default Account