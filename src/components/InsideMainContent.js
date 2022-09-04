import React from 'react'
import "../styles/InsideMainContent.css" 

const InsideMainContent = ({children, topMargin = null}) => {
  const style = {
    marginTop: topMargin,
  }
  return (
    <div className='InsideMainContent' style={topMargin !== null ? style : null}>{children}</div>
  )
}

export default InsideMainContent