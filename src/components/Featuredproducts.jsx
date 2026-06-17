import ProductImage1 from "../assets/product1.png";
import ProductImage2 from "../assets/product2.jpg"

const Featuredproducts = () => {
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5 py-10">
        <h2 className="text-green-400 text-4xl font-medium pb-10">
            Featured
            <span className="text-gray-700"> Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-5 ">
            <div className="bg-slate-100 overflow-hidden rounded-lg">
                <img
                 className="object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110" 
                 src={ProductImage1} alt="" />
            </div>
            <h3 className="text-lg text-gray-800 font-semibold">Dummy Product</h3>
            <p className="text-base text-gray-700">NRS 1000
                <
            </p>

             <div className="bg-slate-100 overflow-hidden rounded-lg">
                <img
                 className="object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110" 
                 src={ProductImage2} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Featuredproducts