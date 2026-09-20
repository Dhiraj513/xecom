import { Link } from "react-router-dom"
import Layout from "../components/layouts/Layout"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductImg1 from "../assets/product1.png";
import ProductImg2 from "../assets/product2.jpg";
import ProductImg3 from "../assets/product3.png";
import { useEffect, useState } from "react";


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
    const [mainImage, setMainImage] = useState(null)

    const handleGallery = (item) => {
      setMainImage(item)
    }

    useEffect(() => {
      if (gallery) {
        setMainImage(gallery[0])
    }
    },[])
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
        <div className="lg:col-span-5 col-span-12 ">
      {/*Gallery */}
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-10 bg-slate-50">
          {/*Main Images */}
          <img src={mainImage?.url} className="w-full rounded-md" alt="" />
                 </div>
        <div className="col-span-2">
          {/* Small Images */}
          {
            gallery && gallery.map(item => {
              return (
                <Link key={item.id} >
                <img  onClick={ () => handleGallery(item)} src={item.url} className="w-full" alt="" className="bg-slate-50 rounded-md"  />
              </Link>
              )
            })
          }
        </div>
   
      </div>
        </div>
        <div className="lg:col-span-7 col-span-12 ">
          {/*Product info */}
          <h2 className="font-bold text-2xl text-gray-800">Good product for men </h2>

          {/*price */}
          <div className="font-bold text-lg">
            $100 {" "}
            <span className="text-gray-500 font-normal">$150</span>
          </div>

          {/*Description */}
          <div className="text-base text-gray-500 mt-3">
            If the goal of presenting your product is to sell it, then stating the price is undoubtedly a necessary element. After all, once customers have their hearts set on your product, they will be eager to know how much it will cost them.

          </div>

          {/*sizes */}
          <div className="font-bold text-lg mt-3">Select size</div>

          <div className="flex gap-x-2"></div>
             <div className="bg-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">S</div>
             <div>M</div>
             <div>L</div>
             <div>XL</div>
        </div>
       
      </div>
    </div>
   </Layout>
  )
}

export default Product