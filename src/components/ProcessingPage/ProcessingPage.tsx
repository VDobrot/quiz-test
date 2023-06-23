import React, { useEffect, useState } from 'react'
import { DataComponents } from "../../AppContext"

interface ProcessingPageProps {
  data: DataComponents["processingPage"]
  contactOption: string
  contactValue: string
}

export const ProcessingPage = (props: ProcessingPageProps) => {
  const {data, contactOption, contactValue} = props
  const [timeLeft, setTimeLeft] = useState(data.estimatedTime)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
      }, 60000)
      return () => clearInterval(timer)
    }
  }, [timeLeft])

  const message = timeLeft > 0 ?
    `Estimated Time Remaining: ${timeLeft} minutes` :
    "Your video is ready! We've sent it to your specified contact."

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{message}</p>
      <p>We’ll be sending your video to: {contactValue} via {contactOption}</p>
      {/*animation*/}
      <p>{data.description}</p>
    </div>
  )
}
