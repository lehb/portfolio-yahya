import React from 'react'
import arrow from '../../assets/arrow_right.png'
import './service.css'
const Service = ({title,text,linkto}) => {
  return (
    <div className='services_service'>
    <h3>{title}</h3>
    <p>{text}</p>
    <p><a href={linkto}>See works<span><img src={arrow} alt="see works" /></span></a></p>
    </div>
  )
}

export default Service