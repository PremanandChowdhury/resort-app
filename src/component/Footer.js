import React from 'react'
import { FaHeart, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className='copyright'>
        Created with <FaHeart className='heart'></FaHeart> By{' '}
        <em>Premanand Chowdhury</em>
      </div>
      <ul className='footer-links'>
        <li>
          <a href='https://www.linkedin.com/in/premanand-chowdhury/'>
            <FaLinkedin className='social-icon'></FaLinkedin>
          </a>
        </li>
        <li>
          <a href='https://github.com/PremanandChowdhury'>
            <FaGithub className='social-icon'></FaGithub>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
