import React from 'react'
import circuitImg from "../../assets/picture/circuit.png"

const Circuit = () => {
    const styles = {
        div: {
            width: "100%",
            boxSizing: "border-box",
            paddingLeft: "3rem",
        },
        img: {
            width: "100%",
        }
    }

  return (
    <div style={styles.div}>
        <img 
            src={circuitImg}
            style={styles.img}
            alt='circuit' 
        />
    </div>
  )
}

export default Circuit