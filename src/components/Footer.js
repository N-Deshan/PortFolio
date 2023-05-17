import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff",
                 marginRight: "2rem"}} />
                 <div>
                    <p>E 203/2 Alupotha,Ussapitiya</p>
                    <p>SriLanka</p>
                 </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff",
                 marginRight: "2rem"}} />
                 +94 702261579 / +94 777941066
                 </h4>
            </div>
            <div className='phone'>
                <h4><FaMailBulk size={20} style={{color:"#fff",
                 marginRight: "2rem"}} />
                 deshanw77@gmail.com
                 </h4>
            </div>
        </div>
        <div className='right'>
            <div className='social'>
              <Link to="https://web.facebook.com/deshan.wijethunga.14" target='_blank'><FaFacebook size={30} style={{color:"#fff",
                marginRight: "1rem"}} />
              </Link>
              <Link to="https://twitter.com/Deshan2005" target='_blank'><FaTwitter size={30} style={{color:"#fff",
                marginRight: "1rem"}} />
              </Link>
              <Link to="https://www.linkedin.com/in/deshan-wijethunga-14846a232/" target='_blank'><FaLinkedin size={30} style={{color:"#fff",
                marginRight: "1rem"}} />
              </Link>
              <Link to="https://github.com/N-Deshan" target='_blank' ><FaGithub size={30} style={{color:"#fff",
                marginRight: "1rem"}} />
              </Link> 
              <Link to="https://www.instagram.com/namidu_deshan/" target='_blank' ><FaInstagram size={30} style={{color:"#fff",
                marginRight: "1rem"}} />
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
