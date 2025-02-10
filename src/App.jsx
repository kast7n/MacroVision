import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WhyChooseUs from './components/why-choose-us/why-choose-us.component'
import Navbar from './navigation/navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <WhyChooseUs></WhyChooseUs>
    </>
  )
}

export default App
