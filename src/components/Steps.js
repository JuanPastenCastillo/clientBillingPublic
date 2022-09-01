import React from "react"
import "../styles/Dots.css"

let Dots = ({ actual = 1, total = 1 }) => {
  let dotStyle = {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: "white",
    opacity: "0.5",
    marginRight: "20px"
  }
  let dotStyleSelected = {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    backgroundColor: "white",
    marginRight: "20px"
  }

  let arr = Array(total)
    .fill(0)
    .map((x, i) => {
      return i === actual - 1 ? (
        <div className="Dot" style={dotStyleSelected}></div>
      ) : (
        <div style={dotStyle}></div>
      )
    })

  return (
    <>
      {arr.map((x, i) => (
        <React.Fragment key={i}>{x}</React.Fragment>
      ))}
    </>
  )
}

const Steps = ({ actual = 1, total = 1 }) => {
  if (actual > total) {
    console.error("Check the lenght of dots in «Step.js»");
    const style= {
      textDecoration:"line-through",
      color:"red"
    }
    return (
      <div style={style}>
        Check values, actual is greater than total
      </div>
    )
  }

  return (
    <div className="Step">
      Step {actual} of {total}
      <Dots actual={actual} total={total} />
    </div>
  )
}

export default Steps
