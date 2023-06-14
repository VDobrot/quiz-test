import React, { useState } from 'react'
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useNavigate } from 'react-router-dom';

export interface UploadProps {
  title: string,
  subTitle: string,
  guidelinesTitle: string,
  guidelines: {
    image: string,
    text1: string,
    text2: string
  }[],
  uploadButtonText: string,
  supportedFormats: string,
  removeImageButtonText: string,
  finalizeButtonText: string,
  backButton: string,
  nextPage: () => void
}

export const UploadPage = (props: UploadProps) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleBackClick = () => {
    navigate('/question1')
  }

  const handleNextPage = () => {
    props.nextPage();
  }

  const handleFileSelect = (event: any) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleRemoveImage = () => {
    setSelectedFile(null)
  }

  const {
    title,
    subTitle,
    guidelinesTitle,
    guidelines,
    supportedFormats,
    removeImageButtonText,
    finalizeButtonText
  } = props;

  return (
    <div>
      <ProgressBar onBack={handleBackClick} progress={100} showBackButton={true}/>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <div>
        <h3>{guidelinesTitle}</h3>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          {guidelines.map((item: { image: string; text1: string; text2: string; }, index: number) => (
            <div key={index}>
              <img src={selectedFile ? URL.createObjectURL(selectedFile) : item.image} alt="Guideline"/>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
        <div>
          <input type="file" onChange={handleFileSelect}/>
          <p>{supportedFormats}</p>
          <button disabled={!selectedFile} onClick={handleRemoveImage}>{removeImageButtonText}</button>
          <button onClick={handleNextPage}>
            {finalizeButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}
