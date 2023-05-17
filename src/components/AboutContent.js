import { Link } from 'react-router-dom';
import './AboutContentStyles.css';
import react1 from '../assets/about.png';
import react2 from '../assets/work.jpg';
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am <span>Deshan Wijethunga</span> a <br/>Front-end Developer,<br/>Python/Java Developer,<br/>Who create
            responsive webpages according to the customers wish</p>
            <Link to="/contact">
                <button className='btn'>contact</button> 
            </Link>

        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={react1} className='img' alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={react2} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent