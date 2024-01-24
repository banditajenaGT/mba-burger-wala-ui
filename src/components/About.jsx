import React from 'react'
import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from 'react-icons/ri'
import me from "../assets/founder.jpg";

const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About Us</h1>
        <article>
          <h4>MBA Burger Wala</h4>
          <p>
            We are here to provide you tasty and loaded burgers with lots love and affection.
          </p>

          <Link to="/"><RiFindReplaceLine /></Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Bandita Jena</h3>
            </div>
            <p>We together are the best combination ever.</p>
          </article>
        </div>
      </main>
    </section>
  )
}

export default About
