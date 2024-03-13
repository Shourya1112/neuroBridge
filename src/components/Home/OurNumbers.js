import React from 'react'
import accuracyIcon from "../../assets/icons/editIcon.svg"
import insightsIcon from "../../assets/icons/insightsicon.svg"
import engagementIcon from "../../assets/icons/engagementIcon.svg"
import "../../styles/Home/components/OurNumbers.css"

const OurNumbers = () => {
    const numbers = [
        { 
            id: 0, 
            icon: accuracyIcon,
            label: "ACCURACY",
            value: 85,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum."
        },
        { 
            id: 1, 
            icon: insightsIcon,
            label: "INSIGHTS",
            value: 60,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum."
        },
        { 
            id: 2, 
            icon: engagementIcon,
            label: "ENGAGEMENT",
            value: 40,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum."
        }
    ]

  return (
    <div className='our-numbers-main-div'>
        <div className='numbers-main-content'>
            <div className='top-numbers'>
                {numbers.map((item, index) => (
                    <div key={index} className='numbers-div'>
                        <div className='main-numbers'>
                            <p className='num-value'>
                                {item.value}%
                            </p>
                            <p className='num-label'>
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className='bottom-numbers'>
                {numbers.map((item, index) => (
                    <div key={index} className='briefing-div'>
                        <div className='brief'>
                            <img 
                                src={item.icon} 
                                className='brief-icon' 
                                alt={item.label} 
                            />
                            <p className='brief-label'>
                                {item.label}</p>
                            <p className='brief-para'>
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurNumbers