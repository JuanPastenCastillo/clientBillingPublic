import React from 'react'
import MainContent from './MainContent'
import InsideMainContent from './InsideMainContent'
import HeaderInsideMainContent from './HeaderInsideMainContent'
import LogoTitleSubTitle from './LogoTitleSubTitle'
import FinalButton from './Buttons'
import InsideMainContentBackground from './InsideMainContentBackground'

const ClientBillingConnected = () => {
  return (
    <MainContent>
      <InsideMainContent>
        <HeaderInsideMainContent actual={1} total={2} />
        <InsideMainContentBackground>
          <LogoTitleSubTitle logo={true} textLogo="stripe" title='Connect Stripe Account' subTitle='' />
          Here box
          <FinalButton> Continue </FinalButton>
        </InsideMainContentBackground>
      </InsideMainContent>
    </MainContent>
  )
}

export default ClientBillingConnected