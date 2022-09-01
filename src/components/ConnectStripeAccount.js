import { useState } from "react"
import "../styles/ConnectStripeAccount.css"
import { ExternalLink } from "../icons"
import UpgradeOffer from "./UpgradeOffer.js"
import DisplayUpgraded from "./DisplayUpgraded.js"

const ConnectStripeAccount = () => {
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeApplied, setUpgradeApplied] = useState(false)

  const handleShowUpgrade = () => {
    setShowUpgrade(true)
  }

  return (
    <div className="WrapperConnectStripeAccount">
      {showUpgrade && <UpgradeOffer isUpgrated={setUpgradeApplied} />}
      <div className="ConnectStripeAccount">
        <div className="CTA-Header">
          <div className="CTA-Header-Left">Getting started</div>
          <div className="CTA-Header-Right">
            Step 1 of 2 <span>·</span>
            <span>·</span>
          </div>
        </div>

        <div className="CTA-MainContent">
          <div className="CTA-MC-Logo">
            <div className="CTA-MC-Logo-Text">stripe</div>
          </div>
          <p className="CTA-MC-Title">Connect Stripe Account</p>
          <span className="CTA-MC-Subtitle">
            Client billing requires a free Stripe account. Connect your existing
            account or create a new one.
          </span>
          <div className="CTA-MC-TransactionFee">
            <p>Transaction Fee</p>
            <p>{upgradeApplied ? <DisplayUpgraded/> : "5%"}</p>
          </div>
          <button className="CTA-MC-Button" onClick={handleShowUpgrade}>
            Get Started
          </button>
          <a href="#" className="CTA-MC-Link">
            Find out more about Client Billing <ExternalLink />{" "}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConnectStripeAccount
