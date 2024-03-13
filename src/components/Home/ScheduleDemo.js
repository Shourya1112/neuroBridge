import React from 'react'
import ticketIcon from "../../assets/icons/ticketIcon.svg"
import ScheduleBtn from '../../globalComponents/scheduleBtn/ScheduleBtn'
import "../../styles/Home/components/ScheduleDemo.css"

const ScheduleDemo = () => {
    const text = "Venture deeper into the AI realm with models. Venture deeper into the AI realm.Venture deeper into the AI realm with models. Venture deeper into the AI realmVenture deeper into the AI realm with models."

  return (
    <div className='schedule-demo-main-div'>
        <div className='schedule-main-content'>
            <img src={ticketIcon} className='ticket-icon' alt='ticket' />

            <p className='main-title'>
                Discover the Use Cases with our <span>Cutting Edge</span> Platform
            </p>

            <p className='main-text'>
                {text}
            </p>

            <ScheduleBtn />
        </div>
    </div>
  )
}

export default ScheduleDemo