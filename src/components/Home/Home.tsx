import Delivery from "../DeliveryImg/DeliveryImg"
import Booking from "../Pages/Booking/Booking"
import Dishes from "../Pages/Dishes/Dishes"
import Partner from "../Pages/Partner/Partner"
import Welcome from "../Pages/Welcome"

function Home() {
  return (
    <>
      <Welcome/>
      <Partner/>
      <Booking/>
      <Dishes/>
      <Delivery/>

    </>
  )
}

export default Home
