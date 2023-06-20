import React, { useState } from 'react'
import { DataComponents } from "../../AppContext";

export interface PrivacyPolicyProps {
  data: DataComponents["privacyPolicy"]
  decline: () => void
  accept: () => void
}

export const PrivacyPolicy = (props: PrivacyPolicyProps) => {
  const {data, decline, accept} = props

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [ageAccepted, setAgeAccepted] = useState(false);


  const handleAccept = () => {
    if (termsAccepted && policyAccepted && ageAccepted) {
      accept()
    } else {
      alert('You must accept the terms and conditions!!!')
    }
  }


  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.message}</p>
      <input
        type="checkbox"
        id="terms"
        name="terms"
        onChange={() => setTermsAccepted(!termsAccepted)}
      />
      <label htmlFor="terms">I agree with the
        <a href="#"
           target="_blank"
           rel="noopener noreferrer"> Terms and Conditions
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
           rel="noopener noreferrer"> Privacy Policy
        </a>
      </label>
      {!policyAccepted && <p style={{color: 'red'}}>You must agree to the Privacy Policy</p>}
      <br/>
      <input
        type="checkbox"
        id="terms"
        name="terms"
        onChange={() => setAgeAccepted(!ageAccepted)}
      />
      <label htmlFor="terms">I agree I am at least
        <a href="#"
           target="_blank"
           rel="noopener noreferrer"> 18 years old
        </a>
      </label>
      {!ageAccepted && <p style={{color: 'red'}}>You must confirm your age</p>}
      <br/>
      <button onClick={decline}>{data.buttonTextDecline}</button>
      <button onClick={handleAccept}
              disabled={!termsAccepted || !policyAccepted || !ageAccepted}>{data.buttonTextAccept}</button>
    </div>
  )
}
