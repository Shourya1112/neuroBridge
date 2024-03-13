import React, { useEffect, useState } from 'react'
import "../../styles/background/BackGround.css"

const BackGround = () => {
    const [ blocks, setBlocks ] = useState()
    const [ activeBlock, setActiveBlock ] = useState()
    const [ score, setScore ] = useState(0)
    const vw = window.innerWidth
    let numberOfCircles = (vw < 900? 120 : 300)

    useEffect(() => {
        const interval = setInterval(() => {
          const randomValue = Math.floor(Math.random() * numberOfCircles); // Generate random value between 0 and 300
          const randomValue2 = Math.floor(Math.random() * numberOfCircles); // Generate random value between 0 and 300
          const randomValue3 = Math.floor(Math.random() * numberOfCircles); // Generate random value between 0 and 300
          setActiveBlock([randomValue, randomValue2, randomValue3]);
        }, 1200); // Set interval to run every second
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, [numberOfCircles]); 

    useEffect(() => {
        let array = []

        for(let i = 0; i < numberOfCircles; i++) {
            array.push(i)
        }

        setBlocks(array)
    }, [numberOfCircles])

    useEffect(() => {
        console.log(activeBlock)
    }, [activeBlock])

    const handleClick = (index) => {
        if (activeBlock.includes(index)) {
            setScore(prev => prev + 1)
        }
    }

  return (
    <div className='background-container'>
        <div className='absolute'>
            {blocks?.map((_, index) => (
                <div 
                    key={index} 
                    className={activeBlock && activeBlock.includes(index)? "active block" : "block"}
                    onClick={() => handleClick(index)}
                
                ></div>
            ))}
        </div>
        <p className='hello'>{score}</p>
    </div>
  )
}

export default BackGround