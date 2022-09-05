import React from 'react'
import MainContent from './MainContent'
import InsideMainContent from './InsideMainContent'
import HeaderInsideMainContent from './HeaderInsideMainContent'
import LogoTitleSubTitle from './LogoTitleSubTitle'
import InformationUserConnected from "./InformationUserConnected.js"
import FinalButton from './Buttons'
import InsideMainContentBackground from './InsideMainContentBackground'
import "../styles/ClientBillingConnected.css"


const ClientBillingConnected = ({allData}) => {
  const {isUpgrated, currencySelected, importStripeConfiguration} = allData
  
  return (
    <MainContent>
      <InsideMainContent>
        <HeaderInsideMainContent actual={1} total={2} />
        <InsideMainContentBackground>
          <div className="CBC-Wrapper">
            <LogoTitleSubTitle logo={true} textLogo="stripe" title='Connect Stripe Account' subTitle='' />
            <InformationUserConnected dataToShow={importStripeConfiguration}/>
            <FinalButton whichButton="ClientBillingConnected"> Continue </FinalButton>
          </div>
        </InsideMainContentBackground>
      </InsideMainContent>
    </MainContent>
  )
}

export default ClientBillingConnected