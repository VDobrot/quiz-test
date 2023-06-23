import React, { useState } from 'react'
import { DataComponents } from "../../AppContext";

export interface PrivacyPolicyProps {
  data: DataComponents["privacyPolicy"]
  decline: () => void
  accept: () => void
}

export const PrivacyPolicy = (props: PrivacyPolicyProps) => {
  const {data, decline, accept} = props

  const [termsAccepted, setTermsAccepted] = useState(false)
  const [policyAccepted, setPolicyAccepted] = useState(false)
  const [ageAccepted, setAgeAccepted] = useState(false)

  const [termsTouched, setTermsTouched] = useState(false)
  const [policyTouched, setPolicyTouched] = useState(false)
  const [ageTouched, setAgeTouched] = useState(false)


  const handleAccept = () => {
    setTermsTouched(true)
    setPolicyTouched(true)
    setAgeTouched(true)

    if (termsAccepted && policyAccepted && ageAccepted) {
      accept()
    }
  }

  return (
    <div className='container'>
      <h1>{data.title}</h1>
      <p>{data.message}</p>
      <div>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={() => setTermsAccepted(!termsAccepted)}
        />
        <label htmlFor="terms" dangerouslySetInnerHTML={{__html: data.termsText}}/>
      </div>
      {!termsAccepted && termsTouched && <p style={{color: 'red'}}>{data.errorTermsText}</p>}

      <div>
        <input
          type="checkbox"
          id="policy"
          name="policy"
          onChange={() => setPolicyAccepted(!policyAccepted)}/>
        <label htmlFor="policy" dangerouslySetInnerHTML={{__html: data.policyText}}/>
      </div>
      {!policyAccepted && policyTouched && <p style={{color: 'red'}}>{data.errorPolicyText}</p>}

      <div>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={() => setAgeAccepted(!ageAccepted)}
        />
        <label htmlFor="terms" dangerouslySetInnerHTML={{__html: data.ageText}}/>
      </div>
      {!ageAccepted && ageTouched && <p style={{color: 'red'}}>{data.errorAgeText}</p>}
      <div>
        <button onClick={decline}>{data.buttonTextDecline}</button>
        <button onClick={handleAccept}>
          {data.buttonTextAccept}
        </button>
      </div>
    </div>
  )
}
