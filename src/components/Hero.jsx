import { Link } from "react-router-dom"
import Banner from "../assets/banner.jpg"
const Hero = () => {
  return (
    <div className="bg-slate-50">
        <div className="max-w-360 mx-auto lg:px-8 px-5">
            <div className="grid grid-cols-2 items-center">
        {/*left box */}
        <div className="space-y-7 py-10">
        <h2 className="lg:text-5xl text-3xl text-gray-700 font-bold leading-14">Discover Your Style With Our Collection</h2>
        <p className="text-lg text-gray-800">Explore our curated selection of premium products designed to elecate your lifestyle.Quality meets style in every piece.</p>
         <Link className="bg-green-400 px-8 py-3  text-md rounded-md text-gray-800">Shop Now</Link>
        </div>
            
        {/*right box */       }
        <div className="rlative">
        <img className="rounded-2xl object-cover h-75 sm:h-125 relative w-full" src={Banner} alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero