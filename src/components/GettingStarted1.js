import { useState, useEffect } from "react"
import "../styles/ConnectStripeAccount.css"
import { ExternalLink } from "../icons"
import MainContent from "./MainContent"
import InsideMainContent from "./InsideMainContent"
import HeaderInsideMainContent from "./HeaderInsideMainContent"
import InsideMainContentBackground from "./InsideMainContentBackground"
import LogoTitleSubTitle from "./LogoTitleSubTitle.js"
import UpgradeOffer from "./UpgradeOffer.js"
import DisplayUpgraded from "./DisplayUpgraded.js"
import GettingStartedButton from "./Buttons.js"

const ConnectStripeAccount = ({ setUserIsUpgrated, activeComponent }) => {
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
          setUserIsUpgrated={setUserIsUpgrated}
          userClickUpgrated={setUpgradeApplied}
        />
      )}
      <InsideMainContent>
        <HeaderInsideMainContent actual={1} total={2} />

        <InsideMainContentBackground>
          <LogoTitleSubTitle
            logo={true}
            title="Connect Stripe Account"
            subTitle="Client Billing requires a free account. Connect your existing account or create a new one."
          />
          <div className="CTA-MC-TransactionFee">
            <p>Transaction Fee</p>
            <p>{upgradeApplied ? <DisplayUpgraded /> : "5%"}</p>
          </div>
          <GettingStartedButton
            methods={[handleShowUpgrade, componentCanChange]}
            whichButton="GettingStartedButton"
          >
            Get Started
          </GettingStartedButton>
          <a href="#" className="CTA-MC-Link">
            Find out more about Client Billing <ExternalLink />{" "}
          </a>
        </InsideMainContentBackground>
      </InsideMainContent>
    </MainContent>
  )
}

export default ConnectStripeAccount
