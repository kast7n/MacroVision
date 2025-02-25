import { useState } from 'react'

import './App.scss'
import WhyChooseUs from './components/why-choose-us/why-choose-us.component'
import Navbar from './navigation/navbar/navbar'
import PartnerCarousel from './components/partner-carousel/partner-carousel.component'
import FAQ from './components/faq/faq.component'
import TestimonialCarousel from './components/testimonial-carousel/testimonial-carousel.component'
import AboutBox from './components/abous-us/about-us.component'
import Footer from './footer/footer'
import ContactUs from './components/contact-us/contact-us.component'
import LandingPage from './components/landing/landing.component'
import Spline from '@splinetool/react-spline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Spline className='background'
         scene="https://prod.spline.design/9g1rpTOpzMRpJcW0/scene.splinecode" 
      />
      <Navbar/>
      <LandingPage/>
      <WhyChooseUs/>
      <PartnerCarousel/>
      <TestimonialCarousel/>
      <FAQ/>
      <AboutBox/>
      <ContactUs/>
      <Footer />
    </>
  )
}

export default App
