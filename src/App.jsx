import { useState } from 'react'

import './App.css'
import WhyChooseUs from './components/why-choose-us/why-choose-us.component'
import Navbar from './navigation/navbar/navbar'
import PartnerCarousel from './components/partner-carousel/partner-carousel.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <WhyChooseUs></WhyChooseUs>
      <PartnerCarousel></PartnerCarousel>
    </>
  )
}

export default App
