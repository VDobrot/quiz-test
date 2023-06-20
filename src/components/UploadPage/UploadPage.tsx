import React, { useRef, useState } from 'react'
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { DataComponents } from "../../AppContext";

export interface UploadProps {
  data: DataComponents["uploadPage"];
  backPage: () => void;
  nextPage: () => void;
}

export const UploadPage = (props: UploadProps) => {
  const {data, nextPage, backPage} = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleBackClick = () => {
    backPage();
  }

  const handleNextPage = () => {
    nextPage();
  }

  const handleFileSelect = (event: any) => {
    if (event.target.files) {
      const file = event.target.files[0]
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setSelectedFile(event.target.files[0])
        setError(null);
      } else {
        setError('The image you uploaded does not meet our content moderation requirements. Please remove and try again.');
      }
    }
  }

  const handleRemoveImage = () => {
    setError(null);
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <div>
      <ProgressBar onBack={handleBackClick} progress={100} showBackButton={true}/>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <h2>{data.guidelinesTitle}</h2>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{flex: 1}}>
            {data.guidelines.map((item: {
              image1: string;
              image2: string;
            }, index: number) => (
              <div key={index}>
                <img src={item.image1} alt="img"/>
                <img src={item.image2} alt="img"/>
              </div>
            ))}
          </div>
          <div style={{flex: 1}}>
            {data.guidelines.map((item: {
              text1: string;
              text2: string;
              text3: string;
              text4: string;
            }, index: number) => (
              <ol key={index}>
                <li>{item.text1}</li>
                <li>{item.text2}</li>
                <li>{item.text3}</li>
                <li>{item.text4}</li>
              </ol>
            ))}
          </div>
        </div>

        <div>
          <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileSelect} ref={fileInputRef} style={{display: 'none'}} />
          <button onClick={handleUploadButtonClick} disabled={!!selectedFile}>{data.uploadButtonText}</button>
          <p>{data.supportedFormats}</p>
          {error && <p style={{color: 'red'}}>{error}</p>}
          {selectedFile && (
            <div>
              <img src={URL.createObjectURL(selectedFile)} alt="Preview"/>
              <p>{selectedFile.name}</p>
              <p>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              <button onClick={handleRemoveImage}>{data.removeImageButtonText}</button>
            </div>
          )}
        </div>
        <h2>{data.deliveryTitle}</h2>
        <p>{data.deliveryDescription}</p>
        <h3>{data.contactTitle}</h3>
        <div>
          <p>{data.contactLabel}</p>
          <input type="tel" placeholder={data.contactPlaceholder}/>
        </div>
        <button onClick={handleNextPage}>
          {data.finalizeButtonText}
        </button>
      </div>
    </div>
  )
}
