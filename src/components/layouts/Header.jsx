import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
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
      <nav className="text-md text-gray-800 space-x-5 flex items-center">
        <Link className='hover:text-green-500' to={'/'}> Home</Link>
        <Link className='hover:text-green-500' to={'/shop'}>Mens</Link>
        <Link className='hover:text-green-500' to={'/'}> Home</Link>
        <Link className='hover:text-green-500' to={'/'}> Home</Link>
        <Link className="relative">
        <span className="bg-red-400 text-sm rounded-[50%] flex justify-center text-white absolute left-2 w-6 h-6 -top-5.5"> 0</span>
        <MdOutlineShoppingCart className="mt-1" />
        </Link>

        <Link className="bg-green-400 px-5 py-3 text"></Link>
      </nav>
      </div>
    </header>
  )
}

export default Header