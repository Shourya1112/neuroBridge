import React from 'react'
import cardGrid from "../../assets/picture/cardGrid.png"
import "../../styles/Home/components/DiscoverCards.css"


const DiscoverCards = () => {
  return (
    <div className='discover-cards-main-div'>
        <p className='discover-sub-title'>
            <span>TAILORED SOLUTIONS</span> FOR YOUR UNIQUE SYSTEM
        </p>
        <p className='discover-title'>
        Discover the Use Cases with our <span>Cutting Edge</span> Platform
        </p>

        <img 
            src={cardGrid} 
            className='card-grid-image' 
            alt='card-grid'
        />
    </div>
  )
}

export default DiscoverCards