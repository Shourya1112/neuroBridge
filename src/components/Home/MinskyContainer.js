import React, { useState } from 'react'
import cardIcon from "../../assets/icons/minskyCardIcon.png"
import "../../styles/Home/components/MinskyContainer.css"

const MinskyContainer = () => {
    const [ currentHoverCard, setCurrentHoverCard ] = useState(0)
    const subHeading = "Venture deeper into the AI realm with models. Venture deeper into the AI realm"
    const cardData = [
        { title: "Live Updates", para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models" },
        { title: "Customizable Playground", para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models" },
        { title: "Real Time Interactions", para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models" },
        { title: "Stats Updates", para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models" },
    ]

  return (
    <div className='minsky-container'>
        <p className='heading'>
            Create Perfect Conversations
            <br/>
            with <span>Minsky.</span>
        </p>
        <div className='row-container'>
            <div className='stats-div'>
                <p className='sub-heading'>
                    {subHeading}
                </p>

                {cardData.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentHoverCard(index)}
                        // onMouseLeave={() => setCurrentHoverCard(0)}
                        className={(currentHoverCard === index)? "minsky-card-hover" : "minsky-card"}
                    >
                        <img src={cardIcon} className='card-icon' alt='card-icon' />
                        <div className='text-div'>
                            <p className='card-title'>
                                {item.title}
                            </p>
                            <p className='card-para'>
                                {item.para}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='right-empty-div'>

            </div>
        </div>
    </div>
  )
}

export default MinskyContainer;