import React, { useEffect, useState } from 'react'
// import { IoTimer } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import "../../styles/background/BackGround.css"

const BackGround = () => {
    const [ blocks, setBlocks ] = useState()
    const [ activeBlock, setActiveBlock ] = useState()
    const [ score, setScore ] = useState(0)
    const [ speed, setSpeed ] = useState(1200)
    const [ lives, setLives ] = useState([1,1,1])
    const [ redBlock, setRedBlock ] = useState()
    const [ gameRunning, setGameRunning ] = useState(false)
    const vw = window.innerWidth
    let numberOfCircles = (vw < 900? 120 : 300)

    useEffect(() => {
        let array = []

        for(let i = 0; i < numberOfCircles; i++) {
            array.push(i)
        }

        setBlocks(array)
    }, [numberOfCircles])

    useEffect(() => {
        if (lives.length === 0) {
            setGameRunning(false)
            setScore(0)
            setActiveBlock([])
            setRedBlock([])
        }
    }, [lives])

    useEffect(() => {
        if (gameRunning) {
            const interval = setInterval(() => {
            const randomValue = Math.floor(Math.random() * numberOfCircles*2);
            const randomValue2 = Math.floor(Math.random() * numberOfCircles*2);
            setRedBlock([randomValue, randomValue2]);
            }, speed); 
        
            return () => clearInterval(interval); 
        }
    }, [numberOfCircles, speed, gameRunning]); 

    useEffect(() => {
        if (gameRunning) {
            const interval = setInterval(() => {
                const randomValue = Math.floor(Math.random() * numberOfCircles);
                const randomValue2 = Math.floor(Math.random() * numberOfCircles);
                const randomValue3 = Math.floor(Math.random() * numberOfCircles);
                setActiveBlock([randomValue, randomValue2, randomValue3]);
            }, speed);

            return () => clearInterval(interval); // Clean up 
        }
    }, [numberOfCircles, speed, gameRunning]); 

    const handleClick = (index) => {
        if (activeBlock.includes(index)) {
            setScore(prev => prev + 1)
            return
        } else if (redBlock.includes(index)) {
            setLives(prev => {
                let array = [...prev]
                array.pop()
                return array
            })
        }
    }

    const handleBlockType = (index) => {
        if (activeBlock && activeBlock.includes(index)) {
            return "active block"
        } else if (redBlock && redBlock.includes(index)) {
            return "red-block block"
        }

        return "block"
    }

    const playPauseGame = () => {
        setGameRunning(prev => !prev)
        setActiveBlock([])
        setRedBlock([])
    }

  return (
    <div className='background-container'>

        {!gameRunning &&
        <div className='main-menu-container'>
            <div className='main-menu-div'>
                <p className="play-tip">
                    Tap the purple, but stay away from red!
                </p>

                <div className='speed-select'>
                    <button onClick={() => setSpeed(1500)} className='speed-btn slow'>
                        Easy
                    </button>
                    <button onClick={() => setSpeed(1200)} className='speed-btn mid'>
                        Normal
                    </button>
                    <button onClick={() => setSpeed(800)} className='speed-btn fast'>
                        Fast
                    </button>
                </div>

                <div className='slider-div'>
                    <input
                        type='range'
                        min="500"
                        max="1600"
                        defaultValue="1050"
                        className='slider'
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                    />
                    <p className='speed-text'>
                        {100 - Math.floor((speed - 500)/11)}
                    </p>
                </div>

                <button 
                    className='submit-btn'
                    onClick={() => setGameRunning(true)}
                >
                    PLAY
                </button>
            </div>
        </div>}

        <div className='absolute'>
            {blocks?.map((_, index) => (
                <div 
                    key={index} 
                    className={handleBlockType(index)}
                    onClick={() => handleClick(index)}
                
                ></div>
            ))}
        </div>
        <div
            onClick={playPauseGame} 
            className='hello'
        >
            {score}<br/>
            <span>
                {lives.map((_) => (<FaHeart />))}
            </span>
        </div>
    </div>
  )
}

export default BackGround