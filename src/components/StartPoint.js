import React, { useState } from "react"
import Header from "./Header"
import GettingStarted1 from "./GettingStarted1.js"
import GettingStarted2 from "./GettingStarted2.js"
import ImportingStripeConfigurations from "./ImportingStripeConfigurations.js"
import ClientBillingConnected from "./ClientBillingConnected.js"
import "../styles/StartPoint.css"

const MainWrapper = () => {
  const [whichComponentDisplay, setWhichComponentDisplay] =
    useState("ClientBillingPT1")
  const [isUpgrated, setIsUpgrated] = useState(false)
  const [currencySelected, setCurrencySelected] = useState()
  const [importStripeConfiguration, setImportStripeConfiguration] = useState()
  console.log("currencySelected:", currencySelected)
  console.log("isUpgrated:", isUpgrated)
  console.log("whichComponentDisplay:", whichComponentDisplay)

  return (
    <div className="StartPoint">
      <Header displaySubTitle={whichComponentDisplay} />

      {whichComponentDisplay === "ClientBillingPT1" && (
        <GettingStarted1
          activeComponent={setWhichComponentDisplay}
          setUserIsUpgrated={setIsUpgrated}
        />
      )}

      {whichComponentDisplay === "ClientBillingPT2" && (
        <GettingStarted2
          activeComponent={setWhichComponentDisplay}
          userIsUpgrated={isUpgrated}
          setUserIsUpgrated={setIsUpgrated}
          setCurrencySelected={setCurrencySelected}
        />
      )}

      {whichComponentDisplay === "ImportingStripeConfigurations" && (
        <ImportingStripeConfigurations
          activeComponent={setWhichComponentDisplay}
          setImportStripeConfiguration={setImportStripeConfiguration}
        />
      )}

      {whichComponentDisplay === "ClientBillingConnected" && (
        <ClientBillingConnected allData={{isUpgrated, currencySelected, importStripeConfiguration}} />
      )}
    </div>
  )
}

export default MainWrapper
