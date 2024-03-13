import React from 'react'
import shieldDone from "../../assets/icons/shield-done.svg"
import "../../styles/Home/components/UniqueSection.css"

const UniqueSection = () => {
    const text = "Venture deeper into the AI realm with models. Venture deeper into the AI realm."

    const cardData = [
        { title: "API Webhooks", content: "Venture deeper into the AI realm with models. Venture deeper into the AI realm." },
        { title: "API Webhooks", content: "Venture deeper into the AI realm with models. Venture deeper into the AI realm." },
        { title: "API Webhooks", content: "Venture deeper into the AI realm with models. Venture deeper into the AI realm." },
        { title: "API Webhooks", content: "Venture deeper into the AI realm with models. Venture deeper into the AI realm." },
        { title: "API Webhooks", content: "Venture deeper into the AI realm with models. Venture deeper into the AI realm." },
        { title: "API Webhooks", content: "Venture deeper into the AI realm with models. Venture deeper into the AI realm." },
    ]

  return (
    <div className='unique-section-main-div'>
        <div className='header-main'>
            <p className='sub-heading'>
                TAILORED SOLUTIONS
            </p>
            <p className='main-heading'>
                Additional Unique Section for <br/><span>NeuroBridge</span> Platform
            </p>
            <p className='text-paragraph'>
                {text}
            </p>
        </div>
        
        <div className='unique-card-container'>
            {cardData.map((item, index) => (
                <div key={index} className='unique-card'>
                    <div className='heading-div'>
                        <img src={shieldDone} className='shield-icon' alt='shield' />
                        <p className='main-card-heading'>
                            {item.title}
                        </p>
                    </div>
                    <p className='main-card-text'>
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UniqueSection