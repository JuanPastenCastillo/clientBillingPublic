import React from 'react'
import Steps from './Steps'
import "../styles/HeaderInsideMainContent.css"

const HeaderInsideMainContent = ({ actual, total }) => {
  return (
    <div className="H-InsideMainContent">
      <div className="H-InsideMainContent-Left">Getting started</div>
      <div className="H-InsideMainContent-Right">
        <Steps actual={actual} total={total} />
      </div>
    </div>
  )
}

export default HeaderInsideMainContent