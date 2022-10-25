import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AuthContext } from '../contexts/UserContext';

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { signin, resetPassword, signInWithGoogle } = useContext(AuthContext)

  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    signin(email, password)
      .then(result => {
        toast.success('Login Success!')
        navigate(from, { replace: true })
        console.log(result.user)
      })
      .catch(error => toast.error(error.message))
  }

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
  }

  //Reset Pass
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success('Reset link has been sent, please check email')
      })
      .catch(error => toast.error(error.message))
  }

  return (
    <div className='flex justify-center items-center pt-8 mb-5'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                onBlur={event => setUserEmail(event.target.value)}
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
              />
              
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
            >
              Sign in
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button
            onClick={handleReset}
            className='text-xs hover:underline text-gray-400'
          >
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button onClick={handleGoogleSignin} aria-label='Log in with Google' className='p-3 rounded-sm'><FcGoogle/></button>
            {/* onClick={handleFacebook}       */}
          <button aria-label='Log in with Facebook' className='p-3 rounded-sm'>
            <BsFacebook/> </button>
            {/* onClick={handleGirhub}   */}
          <button aria-label='Log in with GitHub' className='p-3 rounded-sm'>
              <BsGithub/>
          </button>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <Link to='/register' className='hover:underline text-gray-600'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;