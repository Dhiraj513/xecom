import Featuredproducts from "../components/Featuredproducts"
import Hero from "../components/Hero"
import Footer from "../components/layouts/Footer"
import Header from "../components/layouts/Header"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
      <Featuredproducts/>
      </div>
  )
}

export default Home