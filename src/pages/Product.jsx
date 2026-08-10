import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const product = () => {
  return (
   <Layout>
     {/* breadcrum */}
    <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
      <div className="flex gap-x-1 items-center text-sm">
        <Link>Shop</Link>
        <MdOutlineKeyboardArrowRight />
        <Link className="font-bold">Product for men</Link>
      </div>
    </div>

     <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
      <div className="grid grid-cols-12 gap-5 ">
        <div className="lg:col-span-6 col-span-12 border">

        </div>
        <div className="lg:col-span-6 col-span-12">

        </div>
       
      </div>
    </div>
   </Layout>
  )
}

export default product