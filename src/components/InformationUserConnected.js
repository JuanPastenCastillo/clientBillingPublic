import React, { useEffect, useState } from "react"
import { CircleCheck, CircleX } from "../icons"
import "../InformationUserConnected.css"

const InformationUserConnected = ({ dataToShow }) => {
  const [connection, setConnection] = useState(true)

  let name = "{name}"
  let email = "{email}"

  for (const x of dataToShow) {
    name = x.name !== "" ? x.name : name
    email = x.email !== "" ? x.email : email
  }

  useEffect(() => {
    for (const x of dataToShow) {
      console.log(x)
      if (x.name === "" || x.email === "") {
        setConnection(false)
      }
    }
  }, [])



  return (
    <div className="InformationUserConnected">
      <div>
        <span>{name} Stripe Account</span>
        <span>{email}</span>
      </div>
      <div>
        {connection ? (
          <>
            <span>Connected</span> <CircleCheck style={{ fill: "green" }} />
          </>
        ) : (
          <>
            <span>No connected</span> <CircleX style={{ fill: "crimson" }}/>
          </>
        )}
      </div>
    </div>
  )
}

export default InformationUserConnected
