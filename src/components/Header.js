import React from 'react'
import "../styles/Header.css"
import { ExternalLink } from '../icons'

const Header = ({ company = "{company}" }) => {
  return (
    <div className='Header'>
      <div className='HeaderLeft'>
        <p>Client Billing <span>- a full payment solution for your business, free with {company}</span></p>
      </div>

      <div className="HeaderRight">
        <a href="#">
          <p>Docs</p>
          <ExternalLink></ExternalLink>
        </a>
      </div>
    </div>
  )
}

export default Header