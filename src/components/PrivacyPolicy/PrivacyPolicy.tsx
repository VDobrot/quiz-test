import React, { useState } from 'react'

export interface PrivacyPolicyProps {
  title: string,
  message: string,
  buttonTextDecline: string,
  buttonTextAccept: string,
  decline: () => void
  accept: () => void
}

export const PrivacyPolicy = (props: PrivacyPolicyProps) => {
  const {title, message, buttonTextDecline, buttonTextAccept, decline, accept} = props

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);


  const handleAccept = () => {
    if (termsAccepted && policyAccepted) {
      accept()
    } else {
      alert('You must accept the terms and conditions!!!')
    }
  }


  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <input
        type="checkbox"
        id="terms"
        name="terms"
        onChange={() => setTermsAccepted(!termsAccepted)}
      />
      <label htmlFor="terms">I agree with the
        <a href="#"
           target="_blank"
           rel="noopener noreferrer">Terms and Conditions
        </a>
      </label>
      {!termsAccepted && <p style={{color: 'red'}}>You must agree to the Terms and Conditions</p>}
      <br/>
      <input
        type="checkbox"
        id="policy"
        name="policy"
        onChange={() => setPolicyAccepted(!policyAccepted)}/>
      <label htmlFor="policy">I agree with the
        <a href="#"
           target="_blank"
           rel="noopener noreferrer">Privacy Policy
        </a>
      </label>
      {!policyAccepted && <p style={{color: 'red'}}>You must agree to the Privacy Policy</p>}
      <br/>
      <button onClick={decline}>{buttonTextDecline}</button>
      <button onClick={handleAccept}
              disabled={!termsAccepted || !policyAccepted}>{buttonTextAccept}</button>
    </div>
  )
}
