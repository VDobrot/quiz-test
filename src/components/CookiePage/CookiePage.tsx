import React from 'react'

export interface CookieProps {
  title: string,
  message: string,
  buttonTextDecline: string,
  buttonTextAccept: string,
  decline: () => void
  accept: () => void
}
export const CookiePage = (props: CookieProps) => {
  const { title, message, buttonTextAccept, buttonTextDecline, decline, accept } = props

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <button onClick={decline}>{buttonTextDecline}</button>
      <button onClick={accept}>{buttonTextAccept}</button>
    </div>
  )
}
