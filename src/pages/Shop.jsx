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
    <div className="max-w-360 lg:px-8 px-5 mx-auto">
      <div className="grid grid-cols-12">

    {/*sidebar */}
    <div className="col-span-3">

    </div>

    {/* producs */}
    <div className="col-span-9">

    </div>
      </div>
    </div>

    </Layout>
    </>
  )
}

export default Shop