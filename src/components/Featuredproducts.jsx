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
            <div className="bg-slate-100 overflow-hidden rounded-lg">
                <img src={ProductImage1} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Featuredproducts