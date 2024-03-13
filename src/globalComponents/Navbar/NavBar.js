import React from 'react'
import "../../styles/globalComponents/Navbar/NavBar.css"
import MainLogo from '../mainLogo/MainLogo'

const NavBar = () => {
    const navBtns = [
        {id: 0, name: "Products"},
        {id: 1, name: "Blog"},
        {id: 2, name: "About Us"},
        {id: 3, name: "FAQ"},
        {id: 4, name: "Contact"},
    ]

  return (
    <div className='navbar-main-container'>
        <div className='blur-bg'></div>

        <div className='navbar-main-items'>

            {/* <div className='logo-div'>
                <div className='logo'>
                </div>
                <p className='logo-text'>NEUROBRIDGE</p>
            </div> */}
            <MainLogo />

            <div className="nav-options">
                {navBtns.map((item, index) => (
                    <p key={index} className='nav-item'>{item.name}</p>
                ))}
            </div>

            <div className='user-btns'>
                <button className='log-in-btn'>
                    Log In
                </button>
                <button className='sign-in-btn'>
                    Sign Up
                </button>
            </div>

        </div>
    </div>
  )
}

export default NavBar