import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/qdisco.jpg'
import IMG2 from '../../assets/iwe.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/luggage.png'
import IMG5 from '../../assets/lung.png'
import IMG6 from '../../assets/portfolio6.jpg'

const porfolio = () => {
  const projects = [
    {
      img:IMG1,
      title:'QDisco',
      github:null,
      live:null,
    },
    {
      img:IMG2,
      title:'IWE',
      github:null,
      live:'https://xn--iw-cja.com/',
    },
    {
      img:IMG3,
      title:'Ischolar',
      github:null,
      live:null,
    },
    {
      img:IMG4,
      title:'Luggage swap',
      github:null,
      live:null,
    },
    {
      img:IMG5,
      title:'Lung Disease Detection',
      github:'https://github.com/aazizmegna/Lung',
      live: null,
    },
    {
      img:IMG6,
      title:'Fill Up',
      github:'https://github.com/aazizmegna/fill-up',
      live:null,
    },

  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          projects.map((item)=>{
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={item.github} className={!item.github ? 'btn-disabled': 'btn'} target='_blank' disabled={!item.github}>GitHub</a>
                  <a href={item.live} className={!item.live ? 'btn-live-disabled': 'btn btn-primary'} target='_blank' disabled={!item.live}>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default porfolio