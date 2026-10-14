import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import ProductImg from "../assets/product1.png";

const Cart = () => {
  return (
    <Layout>
       {/* breadcrum */}
    <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
      <div className="flex gap-x-1 items-center text-sm">
        <Link>Home</Link>
        <MdOutlineKeyboardArrowRight />
        <Link className="font-bold">Cart</Link>
      </div>
    </div>
    {/*Title */}
     <div className="max-w-360 lg:px-8 px-5 mx-auto">
      <div className="flex text-4xl text-green-400">
        Cart
      </div>
    </div>
     <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
      <div className="grid grid-cols-12 text-gray-800 gap-5">
      <div className="col-span-9 ">
      {/*Cart Items*/}
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left">Product</th>
            <th className="px-3 py-2 text-center">Qty</th>
            <th className="px-3 py-2 text-center">Total</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          <tr>
            <td className=" py-3 text-left">
              <div className="flex gap-4">
                <div className="bg-slate-50 p-2 rounded-md">
                <img src={ProductImg} className="w-16" />
              </div>
              <div></div>
              </div>
            </td>
            <td className="px-3 py-2 text-center">1</td>
            <td className="px-3 py-2 text-center">Total</td>
          </tr>
        </tbody>

      </table>
      </div>
      <div className="col-span-3 ">
,sreb
      </div>
      </div>
     </div>
    </Layout>
  )
}

export default Cart