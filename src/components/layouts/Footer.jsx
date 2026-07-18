import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 bg-green-300 rounded-lg p-10">
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
        <Link className="hover:underline">Register</Link>
        </div>
        <div className="flex flex-col">
        <h2 className="text-xl text-gray-800 font-bold mb-3"> Contact</h2>
        <Link className="hover:underline">9843703250</Link>
        <Link to={`mailto:dhiraj.kus.9@gmail.com`} className="hover:underline">dhiraj.kus.9@gmail.com</Link>
        <p>Imadol Lalitpur</p>
        </div>
    </div>
    <div className="text-sm text-center py-3">&copy; All Rights Reserved {new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer