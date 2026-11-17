import React from 'react'
import Navbar from './Component/Header/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/Pages/Home'
import Service from './Component/Pages/Service'
import Contact from './Component/Pages/Contact'
import Signin from './Component/Pages/Signin'
import Register from './Component/Pages/Register'
import Empinfo from './Component/Pages/Empinfo'
import About from './Component/Pages/About'
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/empinfo' element={<Empinfo />} />
      </Routes>
      <Footer />
    </div>
  )
}
