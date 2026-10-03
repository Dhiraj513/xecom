
import Layout from '../components/layouts/Layout'

const Login = () => {
  return (
    <Layout>
      <div className='bg-gray-200 w-full flex justify-center items-center py-30'>
    {/* Login Form */}
    <div className='max-w-md w-full rounded-md px-8 py-4 shadow-md bg-white'>
      <h1 className='text-2xl text-gray-800 font-bold text-center'>Login</h1>
      <form className='space-y-4'>
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

      </form>

    </div>

      </div>
    </Layout>
  )
}

export default Login