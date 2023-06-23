import React from "react";

export interface ProgressBarProps {
  onBack: () => void,
  progress: number,
  showBackButton: boolean
}

export const ProgressBar = (props: ProgressBarProps) => {
  const {onBack, progress, showBackButton} = props;

  return (
    <div>
      {showBackButton && <button onClick={onBack}>Back</button>}
      <div style={{border: '1px solid #000', width: '100%', height: '10px'}}>
        <div style={{
          background: '#000',
          width: `${progress}%`,
          height: '100%'
        }}>
        </div>
      </div>
    </div>
  )
}
