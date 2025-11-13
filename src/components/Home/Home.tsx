import Delivery from "../DeliveryImg/DeliveryImg"
import Header from "../Header/Header"
import Booking from "../Pages/Booking/Booking"
import Dishes from "../Pages/Dishes/Dishes"
import Footer from "../Pages/Footer"
import Partner from "../Pages/Partner/Partner"
import Welcome from "../Pages/Welcome"

function Home() {
  return (
    <>
    <Header/>
      <Welcome/>
      <Partner/>
      <Booking/>
      <Dishes/>
      <Delivery/>
      <Footer/>

    </>
  )
}

export default Home
