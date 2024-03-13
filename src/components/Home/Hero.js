import React from 'react'
import { useNavigate } from "react-router-dom"
// import purpleBlur from "../../assets/background/hero-bg-blur.png"
import blackBlur from "../../assets/background/heroBgGroup.png"
import starsIcon from "../../assets/icons/stars.png"
import "../../styles/Home/components/Hero.css"

const Hero = () => {
    const navigate = useNavigate()
    const subText = "Venture deeper into the AI realm with models"
    const paraText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    const prompts = [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet lorem ipsum",
        "Lorem ipsum dolor sit amet"
    ]

  return (
    <div className='hero-home-main-div'>
        {/* <img src={purpleBlur} className='purple-blur' alt='blur' /> */}
        <img src={blackBlur} className='black-blur' alt='blur' />

        <div className='main-content'>
            <p className='main-heading'>
                SHAPING THE <br/><span>FUTURE</span> TODAY.
            </p>

            <p className='sub-text'>{subText}</p>

            <div className='input-main-div'>
                <div className='input-main-container'>
                    <input
                        type='text'
                        placeholder='Example of what to type...'
                        className='search-input-box'
                    />

                    <button onClick={() => navigate("/fun")} className='generate-btn'>
                        Generate
                        <img 
                            src={starsIcon} 
                            className='stars-icon' 
                            alt='stars' 
                        />
                    </button>
                </div>
            </div>

            <div className='suggested-prompts-div'>
                <p className='prompts-title'>Example Prompts</p>

                <div className="prompts-container">
                    {prompts.map((item, index) => (
                        <div key={index} className='prompt-main'>
                            <p className='prompt-text'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='base-paragraph-div'>
                <p className='sub-heading'>Neurobridge Platform</p>
                <p className='para-heading'>All your AI Based Future Plans</p>
                <p className='main-para-text'>{paraText}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero