import React from 'react'
import ScheduleBtn from '../../globalComponents/scheduleBtn/ScheduleBtn'
import "../../styles/Home/components/AdditionalSection.css"

const AdditionalSection = () => {
    const text = "Venture deeper into the AI realm with models. Venture deeper into the AI realm."

  return (
    <div className='additional-section-main-div'>
        <div className='empty-placeholder'></div>

        <div className='additional-main-content'>
            <p className='sub-heading'>
                <span>TAILORED SOLUTIONS</span> FOR YOUR SYSTEM
            </p>
            <p className='main-heading'>
                Additional Section<br/>for <span>NeuroBridge</span> Platform
            </p>
            <p className='text-paragraph'>
                {text}
            </p>

            <ScheduleBtn />
        </div>
    </div>
  )
}

export default AdditionalSection;