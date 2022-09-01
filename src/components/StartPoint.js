import React, {useState} from 'react'
import Header from "./Header";
import GettingStarted1 from "./GettingStarted1.js"
import GettingStarted2 from "./GettingStarted2.js"
import "../styles/StartPoint.css"

const MainWrapper = () => {
  const [whichComponentDisplay, setWhichComponentDisplay] = useState("ClientBillingPT1")
  const [isUpgrated, setIsUpgrated] = useState(false)
  console.log('isUpgrated:', isUpgrated)
  
  
  return (
    <div className='StartPoint'>
      <Header displaySubTitle={whichComponentDisplay}/>
      
      {whichComponentDisplay === "ClientBillingPT1" && <GettingStarted1 activeComponent={setWhichComponentDisplay}  userIsUpgrated={setIsUpgrated} />}
      
      {whichComponentDisplay === "ClientBillingPT2" && <GettingStarted2 activeComponent={setWhichComponentDisplay}  userIsUpgrated={isUpgrated} />}
      
      
      
      

    </div>
  )
}

export default MainWrapper