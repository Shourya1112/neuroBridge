import React from 'react'
import calenderIcon from "../../assets/icons/calenderIcon.svg"
import "../../styles/globalComponents/ScheduleBtn.css"

const ScheduleBtn = ({ onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className='schedule-main-button'>
        <img src={calenderIcon} className='schedule-icon' alt='calender' />
        Schedule a Demo
    </button>
  )
}

export default ScheduleBtn