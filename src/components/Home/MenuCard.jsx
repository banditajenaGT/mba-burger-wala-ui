import React from 'react'
import { motion } from 'framer-motion'

const MenuCard = ({itemNum,burger,price,title,handler}) => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0
        },
        whileInView: {
          x: 0,
          opacity: 1
        }
      }
  return (
    <motion.div className='menuCard' {...options} transition={{delay:`${0.2*itemNum}`}}>
      <div>Item {itemNum}</div>
      <main>
        <img src={burger} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={()=>{handler(itemNum)}}>Buy Now</button>
      </main>
    </motion.div>
  )
}

export default MenuCard
