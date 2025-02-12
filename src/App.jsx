import { useState } from 'react'

import './App.css'
import WhyChooseUs from './components/why-choose-us/why-choose-us.component'
import Navbar from './navigation/navbar/navbar'
import PartnerCarousel from './components/partner-carousel/partner-carousel.component'
import FAQ from './components/faq/faq.component'
import TestimonialCarousel from './components/testimonial-carousel/testimonial-carousel.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <WhyChooseUs></WhyChooseUs>
      <PartnerCarousel></PartnerCarousel>
      <FAQ></FAQ>
      <TestimonialCarousel></TestimonialCarousel>
      
    </>
  )
}

export default App
