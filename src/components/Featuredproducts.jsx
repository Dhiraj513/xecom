import ProductImage1 from "../assets/product1.png";
import ProductImage2 from "../assets/product2.jpg"

const Featuredproducts = () => {

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
            image: ProductImage1,
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
            crossPrice: 1700
        },
         {
            id: 5,
            name: "Dummy Product 5",
            price: 1800,
            crossPrice: 2000
        }
    ]
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5 py-10">
        <h2 className="text-green-400 text-4xl font-medium pb-10">
            Featured
            <span className="text-gray-700"> Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {
                products && products.map(product => {
                    return (
                <div key = {product.id}>
            <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                <img
                 className="object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110" 
                 src={ProductImage1} alt="" />
            </div>
            <h3 className="text-lg text-gray-800 font-semibold">{product.name}</h3>
            <p className="text-base text-gray-700 font-semibold">
                ${product.price} {" "}
                <span className="line-through text-gray-700">${product.crossprice} </span>
            </p>
            </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Featuredproducts