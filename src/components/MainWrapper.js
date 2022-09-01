import React from 'react'
import Header from "./Header";
import ConnectStripeAccount from "./ConnectStripeAccount.js"
import "../styles/MainWrapper.css"

const MainWrapper = () => {
  return (
    <div className='MainWrapper'>
      <Header />
      <ConnectStripeAccount/>

    </div>
  )
}

export default MainWrapper