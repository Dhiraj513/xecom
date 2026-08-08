import Featuredproducts from "../components/Featuredproducts"
import Hero from "../components/Hero"
import LatestProduct from "../components/LatestProduct"
import Layout from "../components/layouts/Layout"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featuredproducts/>
      <LatestProduct/>
      
      </Layout>
  )
}

export default Home