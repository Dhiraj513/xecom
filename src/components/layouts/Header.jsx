import { Link } from "react-router-dom"

const Header = () => {
  return (
    
    <header>
      <div className="bg-green-200">
        <div className="text-sm max-w-360 mx-auto py-1 lg:px-8 px-5">
        Free Delivery on your first order!
        </div>

      </div>
      <div className="max-w-360 mx-auto lg:py-6 py-3 lg:px-8 px-5 flex justify-between items-center">
      <Link>
      <span className="text-3xl text-green-500 font-bold"> X</span>
      <span className="text-3xl text-slate-800 font-bold" >ECOM</span>
      </Link>
      <nav className="text-md text-gray-800 hover:text-green-500">
        <Link to={'/'}> Home</Link>
        <Link to={'/shop'}>Mens</Link>
        <Link to={'/'}> Home</Link>
        <Link to={'/'}> Home</Link>

      </nav>
      </div>
    </header>
  )
}

export default Header