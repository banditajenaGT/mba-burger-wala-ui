import React from 'react'
import { motion } from 'framer-motion'
import founder from '../../assets/founder.jpg'

const Founder = () => {
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
    <section className='founder'> 
      <motion.div {...options}>
        <img src={founder} alt="Founder" height={200} width={200}/>
        <motion.h3 {...options} transition={{ delay: "0.1" }}>Bandita Jena</motion.h3>
        <motion.p {...options} transition={{ delay: "0.2" }}>
            Hey guys !! I'm the founder of MBA Burger wala.
            <br/>
            I will make the most tasty burger and You will get a burger of your taste...
            <br/>
            We together are the best combination ever
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Founder
