import React from 'react'
import { Link } from 'react-router-dom';
import MainLogo from "../mainLogo/MainLogo"
import { FaChevronRight } from "react-icons/fa6";
import "../../styles/globalComponents/Footer/Footer.css"

const Footer = () => {
    const para = "Venture deeper into the AI realm with models. Venture deeper into the AI realm. Venture deeper into the AI realm with models."
    const footerBtns = [
        {
            title: "menu",
            items: [
                { name: "home", linkTo: "/" },
                { name: "Projects", linkTo: "/" },
                { name: "Pricing", linkTo: "/" },
                { name: "Blog", linkTo: "/" },
                { name: "Contact Us", linkTo: "/" }
            ],
        },
        {
            title: "blogs",
            items: [
                { name: "Recent", linkTo: "/" },
                { name: "popular", linkTo: "/" },
                { name: "trending", linkTo: "/" }
            ],
        },
        {
            title: "contact",
            items: [
                { name: "location", linkTo: "/" },
                { name: "mail us", linkTo: "/" },
                { name: "socials", linkTo: "/" }
            ],
        },
        {
            title: "socials",
            items: [
                { name: "instagram", linkTo: "/" },
                { name: "linkedIn", linkTo: "/" },
                { name: "twitter", linkTo: "/" },
                { name: "email", linkTo: "/" }
            ],
        },
    ]

  return (
    <div className='footer-main-div'>
        <div className='footer-main-content'>
            <div className='logo-container'>
                <MainLogo />
            </div>
            <p className='footer-main-para'>
                {para}
            </p>
            <button className='newsletter-btn'>
                Subscribe To Newsletter
                <FaChevronRight />
            </button>
        </div>

        <div className='footer-buttons'>
            {footerBtns.map((items, index) => (
                <div key={index} className='footer-columns'>
                    <p className='footer-list-title'>
                        {items.title}
                    </p>
                    {items.items.map((item, id) => (
                        <Link key={id} to={item.linkTo} className='footer-links'>
                            {item.name}
                        </Link>
                    ))
                    }
                </div>
            ))}
        </div>

        <div className='bottom-bar-container'>
            <p className='bottom-bar-text'>
                Copyright ©2024 Neurobridge
            </p>
        </div>
    </div>
  )
}

export default Footer