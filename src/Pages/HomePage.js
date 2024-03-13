import React from 'react'
import Hero from '../components/Home/Hero'
import OurNumbers from '../components/Home/OurNumbers'
import Circuit from '../components/Home/Circuit'
import MinskyContainer from '../components/Home/MinskyContainer'
import OurBenefits from '../components/Home/OurBenefits'
import DiscoverCards from '../components/Home/DiscoverCards'
import ScheduleDemo from '../components/Home/ScheduleDemo'
import AdditionalSection from '../components/Home/AdditionalSection'
import UniqueSection from '../components/Home/UniqueSection'
import "../styles/Home/HomePage.css"

const HomePage = () => {
  return (
    <div className='home-page-main-div'>
        <div className='components-container'>
            <Hero />
            <OurNumbers />
            <Circuit />
            <MinskyContainer />
            <OurBenefits />
            <DiscoverCards />
            <ScheduleDemo />
            <AdditionalSection />
            <UniqueSection />
        </div>
    </div>
  )
}

export default HomePage