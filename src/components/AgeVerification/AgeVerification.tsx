import React, { useState } from 'react'

export interface AgeVerificationProps {
  title: string,
  message: string,
  buttonTextUnder18: string,
  buttonTextOver18: string,
  termsText: string,
  over18: () => void
}

export const AgeVerification = (props: AgeVerificationProps) => {
  const { title, message, buttonTextUnder18, buttonTextOver18, termsText, over18 } = props
  const [underAgeMessage, setUnderAgeMessage] = useState('');

  const handleUnder18 = () => {
    setUnderAgeMessage('Sorry, you must be over 18 to enter this site.');
  }


  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <button onClick={handleUnder18}>{buttonTextUnder18}</button>
      <button onClick={over18}>{buttonTextOver18}</button>
      {underAgeMessage && <p style={{color: 'red'}}>{underAgeMessage}</p>}
      <p>{termsText}</p>
    </div>
  )
}
