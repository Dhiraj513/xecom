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
              <div className="flex flex-col ">
                <h2 className="text-gray-800 font-semibold">Nice jacket for woman</h2>
                <div className="flex gap-3 items-center pt-3">
                  <div className="text-gray-500 font-semibold">$100</div>
                  <div className="bg-gray-300 flex justify-center items-center px-2 rounded-md">
                    XL
                  </div>
                  </div>
                  <Link className="text-red-400 text-sm pt-3">
                  Remove
                  </Link>
              </div>
              </div>
            </td>
            <td className="px-3 py-2 text-center">
              <div className="flex rounded-md w-25 items-center justify-center px-2 py-1 border border-gray-200">
              <div className="w-5">-</div>
              <div>1</div>
              <div>+</div>
              </div>
            </td>
            <td className="px-3 py-2 text-center">Tol</td>
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