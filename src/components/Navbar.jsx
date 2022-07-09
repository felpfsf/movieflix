import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {
  const { user, logOut } = UserAuth()
  // console.log(user.email)

  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='w-full z-[100] absolute p-4 flex items-center justify-between'>
      <Link to='/'>
        <h1 className='text-4xl text-red-500 font-black uppercase cursor-pointer'>
          Movieflix
        </h1>
      </Link>
      {user?.email ? (
        <div className='my-2 sm:my-0 flex flex-col items-center justify-center gap-2 sm:inline-block'>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer' onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='text-white bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>
        </div>)

      }
    </div>
  )
}

export default Navbar