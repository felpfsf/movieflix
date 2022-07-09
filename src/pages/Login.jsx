import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, logIn } = UserAuth()

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    setError('')
    try {
      await logIn(email, password)
      // console.log('success');
      navigate('/')
    } catch (error) {
      // console.log(error);
      setError(error.message)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='absolute w-full h-full object-cover hidden sm:block' src="../src/assets/images/bg-signup.jpg" alt="" />
        <div className='absolute top-0 left-0 w-full h-screen bg-black/60'></div>

        <div className='fixed w-full px-4 py-24 z-500'>

          <div className='max-w-[450px] h-[600px] mx-auto text-white bg-black/75'>

            <div className='max-w-[320px] mx-auto py-16'>

              <h1 className='text-3xl font-bold'>
                Sign In
              </h1>

              {error ? <p className='my-4 p-3 bg-red-400'>{error}</p> : null}

              <form className='w-full py-4 flex flex-col' onSubmit={handleOnSubmit} >
                <input
                  className='my-2 p-3 rounded bg-gray-700'
                  type="email"
                  placeholder='Email Address'
                  autoComplete='email'
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className='my-2 p-3 rounded bg-gray-700'
                  type="password"
                  placeholder='Password'
                  autoComplete='current-password'
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className='font-bold bg-red-600 my-6 py-3 rounded'>
                  Sing In
                </button>
                <div className='text-sm text-gray-600 flex items-center justify-between'>
                  <p>
                    <input className='mr-2' type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>

                </div>

                <p className='py-8'>
                  <span className='text-gray-600 mr-2'>Are you new here?</span>
                  <Link to='/signup'>
                    Register here
                  </Link>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login