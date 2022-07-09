import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full z-[100] absolute p-4 flex items-center justify-between'>
      <Link to='/'>
        <h1 className='text-4xl text-red-500 font-black uppercase cursor-pointer'>
          Movieflix
        </h1>
      </Link>
      <div>
        <Link to='/login'>
          <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar