import React, { useState } from "react"
import MainContent from "./MainContent"
import InsideMainContent from "./InsideMainContent"
import HeaderInsideMainContent from "./HeaderInsideMainContent"
import InsideMainContentBackground from "./InsideMainContentBackground"
import { ArrowLeft, Exclamation } from "../icons"
import LogoTitleSubTitle from "./LogoTitleSubTitle"
import GettingStartedButton from "./Buttons"
import SuccessfulConnection from "./SuccessfulConnection.js"
import "../styles/GettingStarted2.css"

const GettingStarted2 = ({
  activeComponent,
  setUserIsUpgrated,
  setCurrencySelected
}) => {
  const [actualCurrency, setActualCurrency] = useState("usd")
  const [checkboxState, setCheckboxState] = useState(false)

  const backToFirstPart = () => {
    setUserIsUpgrated(false)
    activeComponent("ClientBillingPT1")
  }

  const getCurrency = (e) => {
    setActualCurrency(e)
  }

  const handleCheckbox = () => {
    console.log("clicked!")
    setCheckboxState(!checkboxState)
  }

  const componentCanChange = () => {
    activeComponent("ImportingStripeConfigurations")
    setCurrencySelected(actualCurrency)
  }

  return (
    <MainContent>
      <SuccessfulConnection delay={999999} />
      <InsideMainContent>
        <HeaderInsideMainContent actual={2} total={2} />
        <InsideMainContentBackground>
          <div className="GettingStarted2">
            <div className="GT2-Icon" onClick={backToFirstPart}>
              <ArrowLeft />
              Back
            </div>
            <LogoTitleSubTitle
              title="Choose Billing Currency"
              subTitle="Select the currency you want to use to bill your clients."
            />
            <div className="WarningToUser">
              <div>
                <Exclamation />{" "}
              </div>
              <span>
                Note: Billing cannot be change in the future. Please make sure
                you select the correct currency.
              </span>
            </div>
            <div className="CurrencySelecter">
              {/* // TODO Make the current choose be taking by some type of state */}

              <select onChange={(e) => getCurrency(e.target.value)}>
                <option value="usd">USD - United States Dollars</option>
                <option value="eur">EUR - EURO</option>
              </select>
            </div>

            <div className="CheckboxUser">
              <input type="checkbox" onClick={handleCheckbox} />
              <p>I am aware that i cannot change currency later</p>
            </div>

            {checkboxState ? (
              <GettingStartedButton
                methods={[componentCanChange]}
                whichButton="FinishSetupEnabled"
              >
                Finish Setup
              </GettingStartedButton>
            ) : (
              <GettingStartedButton whichButton="FinishSetupDisabled">
                Finish Setup
              </GettingStartedButton>
            )}
          </div>
        </InsideMainContentBackground>
      </InsideMainContent>
    </MainContent>
  )
}

export default GettingStarted2
