import React from 'react'
import { DataComponents } from "../../AppContext";

export interface CookieProps {
  data: DataComponents["cookiePage"]
  decline: () => void
  accept: () => void
}

export const CookiePage = (props: CookieProps) => {
  const {data, decline, accept} = props

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.message}</p>
      <button onClick={decline}>{data.buttonTextDecline}</button>
      <button onClick={accept}>{data.buttonTextAccept}</button>
    </div>
  )
}
