import React from 'react'
import CTA from './CTA'
import Socials from './socials'
import ME from '../../assets/me.png'
import './header.css'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abdel Aziz Kamo Megna</h1>
        <div className="text-light">Frontend developer</div>
        <CTA/>
        <Socials/>

        <div className="me">
          <img src={ME} alt='me'/>
        </div>
        <a href='#footer' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header