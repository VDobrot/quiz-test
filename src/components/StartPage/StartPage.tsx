import React from 'react'
import { DataComponents } from "../../AppContext";

export interface StartPageProps {
  data: DataComponents["startPage"];
  onStart: () => void;
}

export const StartPage = (props: StartPageProps) => {
  const { data, onStart } = props

  return (
    <div>
      <button onClick={onStart}>{data.buttonText}</button>
    </div>
  )
}
