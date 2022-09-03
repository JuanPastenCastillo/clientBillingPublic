import React from "react"
import "../styles/FinalButton.css"

const FinalButton = ({ children, methods = [() => { return }], whichButton }) => {
  return (
    <div>
      <button
        className={`${whichButton} AllFinalButtons `}



        onClick={() => {
          methods.map((x) => x())
        }}
      >
        {children}
      </button>
    </div>
  )
}


export default FinalButton