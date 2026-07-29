import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
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
<div className="font-bold  mb-2">Category</div>
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
    </div>
    {/* producs */}
    <div className="col-span-10 border">
kuagdjhslske
    </div>
      </div>
    </div>

    </Layout>
    </>
  )
}

export default Shop