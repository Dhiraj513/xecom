import Featuredproducts from "../components/Featuredproducts"
import Hero from "../components/Hero"
import LatestProduct from "../components/LatestProduct"
import Footer from "../components/layouts/Footer"
import Header from "../components/layouts/Header"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Featuredproducts/>
      <LatestProduct/>
      <Footer />
      
      </div>
  )
}

export default Home