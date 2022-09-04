import React from 'react'
import "../styles/MainContent.css"

const MainContent = ({ children, topMargin = null }) => {

  const style = {
    marginTop: topMargin,
  }

  return (
    <div className='MainContent' style={topMargin !== null ? style : null}>{children}</div>
  )
}

export default MainContent