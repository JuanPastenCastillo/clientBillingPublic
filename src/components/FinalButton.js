import React from "react"
import "../styles/FinalButton.css"

const FinalButton = ({ children, methods }) => {
  return (
    <div>
      <button className="FinalButton" onClick={()=> {methods.map(x => x())}}>{children}</button>
    </div>
  )
}

export default FinalButton
