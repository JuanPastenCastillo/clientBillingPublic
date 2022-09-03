import React, { useState, useEffect } from 'react'
import { Check } from '../icons'
import "../styles/SuccessfulConnection.css"

const SuccessfulConnection = ({ delay = 4000 }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, delay);

    return () => {
      clearTimeout(timer)
    }
  }, [delay])

  return visible ? <div className='SuccessfulConnection'>
    <Check />
    <div>
      <p>Stripe account connected successfully!</p>
      <span>A SECOND AGO</span>
    </div>
  </div> : null



}

export default SuccessfulConnection