import React, {useState} from "react"
import "../styles/UpgradeOffer.css"
import { Megaphone } from "../icons"

const upgradedClickedStyle = {
  "opacity": "1"
} 



const UpgradeOffer = ({userClickUpgrated, setUserIsUpgrated}) => {
  const [upgradeClicked, setUpgradeClicked] = useState(false)
  
  const handleUpgrade = () => {
    userClickUpgrated(true)
    setUpgradeClicked(true)
    setUserIsUpgrated(true)
  }
  
  return (
    <div className="WrapperUpgradeOffer">
      <div className="UO-Icon"><Megaphone> </Megaphone></div>
      <div className="UO-Text">
        <p>Upgrade to pay 0% transaction fee</p>
        <span>Pay 0% transaction fee and get added benefits by upgrading your account.</span>
      </div>
      <button onClick={handleUpgrade} style={upgradeClicked ? upgradedClickedStyle : null}>Upgrade</button>
    </div>
  )
}

export default UpgradeOffer
