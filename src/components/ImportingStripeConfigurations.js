import React, { useEffect, useState } from "react"
import InsideMainContent from "./InsideMainContent.js"
import ISC_Header from "./ISC_Header.js"
import LogoTitleSubTitle from "./LogoTitleSubTitle.js"
import MainContent from "./MainContent.js"
import Spinner from "./Spinner.js"
import "../styles/ISC.css"

const ImportingStripeConfigurations = ({ activeComponent, setImportStripeConfiguration }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Do some fetch here...
      // If the data is found here
      setImportStripeConfiguration([{ name: "John", email: "John@johnny.jo" }])
      
      // If the data is not found here
      // setImportStripeConfiguration([{ name: "", email: "" }])


      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return loading ? (
    <>
      <ISC_Header />
      <MainContent>
        <InsideMainContent topMargin={"4px"}>
          <div className="ISC">
            <LogoTitleSubTitle
              title="Importing Stripe Configurations"
              subTitle="Please wait while importing your Stripe configurations. It will only take a few seconds..."
              customLogo={<Spinner />}
            />
          </div>
        </InsideMainContent>
      </MainContent>
    </>
  ) : (
    activeComponent("ClientBillingConnected")
  )
}

export default ImportingStripeConfigurations
