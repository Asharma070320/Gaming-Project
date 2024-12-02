import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import GamesList from './components/GamesList/GamesList'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <GamesList />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
