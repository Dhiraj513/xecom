import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductImage1 from "../assets/product1.png";
import ProductImage2 from "../assets/product2.jpg";

const Shop = () => {
  const products = [
            {
                id: 1,
                name: "Dummy Product 1",
                image: ProductImage1,
                price: 1000,
                crossPrice: 1100
            },
             {
                id: 2,
                name: "Dummy Product 2",
                price: 1100,
                image: ProductImage2,
                crossPrice: 1200
            },
             {
                id: 3,
                name: "Dummy Product 3",
                price: 1000,
                image: ProductImage1,
                crossPrice: 1200
            },
             {
                id: 4,
                name: "Dummy Product 4",
                price: 1500,
                image: ProductImage2,
                crossPrice: 1700
            },
             {
                id: 5,
                name: "Dummy Product 5",
                price: 1800,
                image: ProductImage1,
                crossPrice: 2000
            }
        ]
  return (
    <>
    <Layout>
    {/* breadcrum */}
    <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
      <div className="flex gap-x-1 items-center text-sm">
        <Link>Home</Link>
        <MdOutlineKeyboardArrowRight />
        <Link className="font-bold">Shop</Link>
      </div>
    </div>
    {/*Title */}
     <div className="max-w-360 lg:px-8 px-5 mx-auto">
      <div className="flex text-4xl text-green-400">
        Shop
      </div>
    </div>

    {/*main Container */}
    <div className="max-w-360 lg:px-8 px-5 mx-auto mt-5">
      <div className="grid grid-cols-12 gap-5">

    {/*sidebar */}
    <div className="col-span-2 pb-5 ">
<div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3">
  <span className="text-2xl font-bold">Filters</span>
  <span className="">Clear</span>
</div>

{/* Categories Filter */}
<div className="font-bold pt-2 mb-2">Category</div>
<div className="flex items-center space-x-2 mb-1">
<input type="checkbox" className="w-4 h-4 border border-gray-400" />
<span> Topwear</span>
</div>

<div className="flex items-center space-x-2 mb-1">
<input type="checkbox" className="w-4 h-4 border border-gray-400" />
<span> Topwear</span>
</div>
<div className="flex items-center space-x-2 mb-1">
<input type="checkbox" className="w-4 h-4 border border-gray-400" />
<span> Topwear</span>
</div>

{/* Brands Filter */}
<div className="font-bold pt-4 mb-2">Brands</div>
<div className="flex items-center space-x-2 mb-1">
<input type="checkbox" className="w-4 h-4 border border-gray-400" />
<span> Zara</span>
</div>

<div className="flex items-center space-x-2 mb-1">
<input type="checkbox" className="w-4 h-4 border border-gray-400" />
<span> Gucci</span>
</div>
<div className="flex items-center space-x-2 mb-1">
<input type="checkbox" className="w-4 h-4 border border-gray-400" />
<span> H&M</span>
</div>

{/* Price Range */}
<div className="font-bold pt-4 mb-2">Price Range</div>
<div className="flex items-center space-x-2 mb-1">
<input type="radio" className="w-4 h-4 border border-gray-400" />
<span> under $50</span>
</div>

<div className="flex items-center space-x-2 mb-1">
<input type="radio" className="w-4 h-4 border border-gray-400" />
<span> $50-$100</span>
</div>
<div className="flex items-center space-x-2 mb-1">
<input type="radio" className="w-4 h-4 border border-gray-400" />
<span> Above $100</span>
</div>
    </div>
    {/* producs */}
    <div className="col-span-10 border">
kuagdjkah
    </div>
      </div>
    </div>

    </Layout>
    </>
  )
}

export default Shop