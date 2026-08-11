import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductImg1 from "../assets/product1.png";
import ProductImg2 from "../assets/product2.jpg";
import ProductImg3 from "../assets/product3.png";


const Product = () => {

    const gallery = [
      {
        id:1,
        url:ProductImg1
      },
      {
        id:1,
        url:ProductImg2
      },
      {
        id:1,
        url:ProductImg3
      }
    ]
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
      {/*Gallery */}
      <div className="grid grid-cols-12">
        <div className="col-span-10">
          {/*Main Images */}
        </div>
        <div className="col-span-2">
          {/* Small Images */}
          {
            gallery && gallery.map(item => {
              return (
                <img src="" alt="" />
              )
            })
          }
        </div>

      </div>
        </div>
        <div className="lg:col-span-6 col-span-12 border">
jghf
        </div>
       
      </div>
    </div>
   </Layout>
  )
}

export default Product