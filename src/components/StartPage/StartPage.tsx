import React from 'react'

export interface StartPageProps {
  onStart: () => void
}

export const StartPage = (props: StartPageProps) => {
  // const { onStart } = props
  return (
    <div>
      <button onClick={props.onStart}>Start</button>
    </div>
  )
}
