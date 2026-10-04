import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"


const Register = () => {
  return (
     <Layout>
      <div className='bg-gray-200 lg:px-8 px-5 sm w-full flex justify-center items-center py-30 mb-10'>
    {/* Login Form */}
    <div className='max-w-md w-full rounded-md px-8 py-7 shadow-md bg-white'>
      <h1 className='text-2xl text-gray-800 font-bold text-center'>Register</h1>
      <form className='space-y-4'>
        <div className='flex flex-col space-y-2'>
          <label htmlfor="" className='text-sm text-gray-800'>Name</label>
        <input type='text' 
        placeholder='Enter Name'
          className='px-3 py-2 border border-gray-200 shadow rounded-md'
         />
        </div>

         <div className='flex flex-col space-y-2'>
          <label htmlfor="" className='text-sm text-gray-800'>Email</label>
        <input type='text' 
        placeholder='Enter Email'
          className='px-3 py-2 border border-gray-200 shadow rounded-md'
         />
        </div>

         <div className='flex flex-col space-y-2'>
          <label htmlfor="" className='text-sm text-gray-800'>Password</label>
        <input type='password' 
        placeholder='Enter password'
          className='px-3 py-2 border border-gray-200 shadow rounded-md'
         />
        </div>

         <div className='flex flex-col space-y-2'>
          <label htmlfor="" className='text-sm text-gray-800'>Confirm Password</label>
        <input type='password' 
        placeholder='Confirm password'
          className='px-3 py-2 border border-gray-200 shadow rounded-md'
         />
        </div>
        <div className='flex flex-col space-y-2 pt-3'>
      <Link className="bg-green-400 px-5 py-2 w-full text-center text-md rounded-md text-gray-800">
      Login
      </Link>
      </div>
      <div className='text-center text-sm text-gray-800 '>
        Already have an account? <Link to ={"/login"} className='hover:underline'>Login</Link>

      </div>

      </form>

    </div>

      </div>
    </Layout>
  )
}

export default Register