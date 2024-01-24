import React from 'react'
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>
        <p>Taste the Best</p>
        <br/>
        <em>We give attention to genuine feedback. </em>
        <strong>All right received by @mbaburgerwala</strong>
        <a href="https://www.freeprivacypolicy.com/live/81b0685d-6468-4d1a-b591-1a8251f3902c">privacy & policy</a>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/bandita_j_r/" target='blank'><AiFillInstagram/></a>
        <a href="https://github.com/banditajenaGT" target='blank'><AiFillGithub/></a>
      </aside>
    </footer>
  )
}

export default Footer
