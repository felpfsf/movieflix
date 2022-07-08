import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full z-[100] absolute p-4 flex items-center justify-between'>
      <h1 className='text-4xl text-red-500 font-black uppercase cursor-pointer'>Movieflix</h1>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar