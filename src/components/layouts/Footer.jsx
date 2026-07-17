import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-green-300 rounded-lg p-10">
      <div className="lg:pr-20"> 
        <Link>
        <span className="text-3xl text-white font bold" >X</span>
        <span className="text-3xl text-slate-800 font-bold">ECOM</span>
          </Link>
          <p className="text-gray-800 mt-2">Your destination for everyday fashion essentials</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl text-gray-800 font-bold mb-3"> Quick Links</h2>
        <Link className="hover:underline">Login</Link>
        <Link>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer