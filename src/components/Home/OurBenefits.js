import React from 'react'
import fadedLine from "../../assets/extras/fadedLine.png"
import editIconPurple from "../../assets/icons/editPurple.png"
import logoCentre from "../../assets/logos/minskyCentre.png"
import "../../styles/Home/components/OurBenefits.css"

const OurBenefits = () => {
    const subTitle = "Venture deeper into the AI realm with models. Venture deeper into the AI realm"
    const cardData = [
        {
            title: "Text to Speech",
            para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models",
        },
        {
            title: "Text to Speech",
            para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models",
        },
        {
            title: "Text to Speech",
            para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models",
        },
        {
            title: "Text to Speech",
            para: "Venture deeper into the AI realm with models. Venture deeper into the AI realm with models",
        },
    ]

  return (
    <div className="benefits-main-div">

        <div className='main-title'>
            <img 
                src={fadedLine} 
                className='faded-line' 
                alt='faded-line'
            />
            <p className='main-heading'>
                Our <span>
                    Benefits
                </span>
            </p>
            <img 
                src={fadedLine} 
                className='faded-line-flipped' 
                alt='faded-line' 
            />
        </div>

        <p className='sub-title'>
            {subTitle}
        </p>

        <div className='card-main-container'>
            <img 
                src={logoCentre} 
                className='centre-logo-div' 
                alt='centre-logo-div' 
            />

            {cardData.map((item, index) => (
            <div key={index} className='benefits-card-main'>
                <img
                    src={editIconPurple} 
                    className='edit-icon' 
                    alt="edit-icon"
                />
                <p className='card-title'>
                    {item.title}
                </p>
                <p className='card-para'>
                    {item.para}
                </p>
            </div>))}
        </div>
    </div>
  )
}

export default OurBenefits