import React, { useCallback, useMemo, useState } from 'react'
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { DataComponents } from "../../AppContext"
import { FileUpload } from "../FileUpload/FileUpload"
import { ContactInput } from "../ContactInput/ContactInput"

export type ContactOption = 'WhatsApp' | 'Email';

export interface UploadProps {
  data: DataComponents["uploadPage"];
  backPage: () => void,
  nextPage: () => void,
  contactOption: ContactOption,
  setContactOption: (option: ContactOption) => void,
  contactValue: string,
  setContactValue: (value: string) => void,
}

export const UploadPage = (props: UploadProps) => {
  const {data, nextPage, backPage, contactOption, setContactOption, contactValue, setContactValue} = props
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [contactError, setContactError] = useState('')

  const handleBackClick = useCallback(() => {
    backPage()
  }, [backPage])

  const handleNextPage = useCallback(() => {
    if (!selectedFile) {
      setFileError('Please select an image');
      return
    }

    if (!contactValue) {
      setContactError('Please enter a contact');
      return
    }

    if (contactError !== '') {
      return
    }

    const formData = new FormData();
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    formData.append('contact', contactValue);

    fetch('https://dummyjson.com', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        nextPage();
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [selectedFile, contactValue, contactError, nextPage]);

  const imageList = useMemo(() => data.guidelines.map((item, index) => (
    <div key={index}>
      <img src={item.image1} alt="img"/>
      <img src={item.image2} alt="img"/>
    </div>
  )), [data.guidelines]);

  const textList = useMemo(() => data.guidelines.map((item, index) => (
    <ol key={index}>
      <li>{item.text1}</li>
      <li>{item.text2}</li>
      <li>{item.text3}</li>
      <li>{item.text4}</li>
    </ol>
  )), [data.guidelines]);

  return (
    <div>
      <ProgressBar onBack={handleBackClick} progress={100} showBackButton={true}/>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <h2>{data.guidelinesTitle}</h2>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{flex: 1}}>
            {imageList}
          </div>
          <div style={{flex: 1}}>
            {textList}
          </div>
        </div>

        <div>
          <FileUpload
            selectedFile={selectedFile}
            error={fileError}
            onFileSelect={setSelectedFile}
            onError={setFileError}
            uploadButtonText={data.uploadButtonText}
            removeImageButtonText={data.removeImageButtonText}
          />
        </div>
        <h2>{data.deliveryTitle}</h2>
        <p>{data.deliveryDescription}</p>
        <h3>{data.contactTitle}</h3>
        <div>
          <ContactInput
            contactOption={contactOption}
            contactValue={contactValue}
            contactError={contactError}
            onContactOptionChange={setContactOption}
            onContactValueChange={setContactValue}
            onContactErrorChange={setContactError}
          />
        </div>
        <button onClick={handleNextPage}>
          {data.finalizeButtonText}
        </button>
      </div>
    </div>
  )
}
