import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const product = () => {
  return (
   <Layout>
     {/* breadcrum */}
    <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
      <div className="flex gap-x-1 items-center text-sm">
        <Link>Home</Link>
        <MdOutlineKeyboardArrowRight />
        <Link className="font-bold">Shop</Link>
      </div>
    </div>
   </Layout>
  )
}

export default product