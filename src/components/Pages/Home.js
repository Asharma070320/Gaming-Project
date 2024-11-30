import React from 'react'
import './Home.css'
import LeftSection from '../Sections/LeftSection'
import RightSection from '../Sections/RightSection'

const Home = () => {
  return (
    <div className='home_container'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default Home
