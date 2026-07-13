
const Footer = () => {
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-green-300 rounded-lg p-10">
      <div> 
        <Link>
        <span className="text-3xl text-white font bold" >X</span>
        <span className="text-3xl text-slate-800 font-bold">ECOM</span>
          </Link>
      </div>
      <div>made with intention</div>
      </div>
    </div>
  )
}

export default Footer