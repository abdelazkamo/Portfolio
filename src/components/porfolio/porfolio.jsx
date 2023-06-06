import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const porfolio = () => {
  const projects = [
    {
      img:IMG1,
      title:'This is a portfolio item title',
      github:'https://github.com/',
      live:'https://github.com/',
    },
    {
      img:IMG2,
      title:'This is a portfolio item title',
      github:'https://github.com/',
      live:'https://github.com/',
    },
    {
      img:IMG3,
      title:'This is a portfolio item title',
      github:'https://github.com/',
      live:'https://github.com/',
    },
    {
      img:IMG4,
      title:'This is a portfolio item title',
      github:'https://github.com/',
      live:'https://github.com/',
    },
    {
      img:IMG5,
      title:'This is a portfolio item title',
      github:'https://github.com/',
      live:'https://github.com/',
    },
    {
      img:IMG6,
      title:'This is a portfolio item title',
      github:'https://github.com/',
      live:'https://github.com/',
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
                  <a href={item.github} className='btn'>GitHub</a>
                  <a href={item.live} className='btn btn-primary' target='_blank'>Live Demo</a>
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