import React, { useState } from 'react'
import { DataComponents } from "../../AppContext";

export interface AgeVerificationProps {
  data: DataComponents["ageVerification"]
  over18: () => void
}

export const AgeVerification = (props: AgeVerificationProps) => {
  const { data, over18 } = props
  const [underAgeMessage, setUnderAgeMessage] = useState('');

  const handleUnder18 = () => {
    setUnderAgeMessage('Sorry, you must be over 18 to enter this site.');
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.message}</p>
      <button onClick={handleUnder18}>{data.buttonTextUnder18}</button>
      <button onClick={over18}>{data.buttonTextOver18}</button>
      {underAgeMessage && <p style={{color: 'red'}}>{underAgeMessage}</p>}
      <p>{data.termsText}</p>
    </div>
  )
}
