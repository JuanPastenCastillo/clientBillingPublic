import { useState, useEffect } from "react"
import "../styles/ConnectStripeAccount.css"
import { ExternalLink } from "../icons"
import MainContent from "./MainContent"
import InsideMainContent from "./InsideMainContent"
import HeaderInsideMainContent from "./HeaderInsideMainContent"
import InsideMainContentBackground from "./InsideMainContentBackground"
import StripeLogo from "./StripeLogo"
import UpgradeOffer from "./UpgradeOffer.js"
import DisplayUpgraded from "./DisplayUpgraded.js"
import FinalButton from "./FinalButton"

const ConnectStripeAccount = ({ userIsUpgrated, activeComponent }) => {
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [upgradeApplied, setUpgradeApplied] = useState(false)
  const [canChange, setCanChange] = useState(false)

  const handleShowUpgrade = (e) => {
    if (showUpgrade === false) {
      return setShowUpgrade(true)
    }
  }

  const componentCanChange = () => {
    if (canChange === false) {
      return setCanChange(true)
    }

    activeComponent("ClientBillingPT2")
  }

  useEffect(() => {}, [])

  return (
    <MainContent>
      {showUpgrade && (
        <UpgradeOffer
          userIsUpgrated={userIsUpgrated}
          userClickUpgrated={setUpgradeApplied}
        />
      )}
      <InsideMainContent>
        <HeaderInsideMainContent actual={1} total={2} />

        <InsideMainContentBackground>
          <StripeLogo />

          <span className="CTA-MC-Subtitle">
            Client billing requires a free Stripe account. Connect your existing
            account or create a new one.
          </span>
          <div className="CTA-MC-TransactionFee">
            <p>Transaction Fee</p>
            <p>{upgradeApplied ? <DisplayUpgraded /> : "5%"}</p>
          </div>
          <FinalButton methods={[ handleShowUpgrade, componentCanChange ]}>
            Get Started
          </FinalButton>
          <a href="#" className="CTA-MC-Link">
            Find out more about Client Billing <ExternalLink />{" "}
          </a>
        </InsideMainContentBackground>
      </InsideMainContent>
    </MainContent>
  )
}

export default ConnectStripeAccount
