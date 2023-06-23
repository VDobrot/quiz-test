import React, { useRef } from 'react'

interface FileUploadProps {
  selectedFile: File | null
  error: string | null
  onFileSelect: (file: File | null) => void
  onError: (error: string | null) => void
  uploadButtonText: string
  removeImageButtonText: string
}

export const FileUpload = (props: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {selectedFile, error, onFileSelect, onError, uploadButtonText, removeImageButtonText} = props

  const handleFileSelect = (event: any) => {
    if (event.target.files) {
      const file = event.target.files[0]
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        onFileSelect(file)
        onError(null)
      } else {
        onError('The image you uploaded does not meet our content moderation requirements. Please remove and try again.')
      }
    }
  }

  const handleRemoveImage = () => {
    onError(null)
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileSelect}
        ref={fileInputRef}
        style={{display: 'none'}}
      />
      <button onClick={handleUploadButtonClick}>{uploadButtonText}</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {selectedFile && (
        <div>
          <img src={URL.createObjectURL(selectedFile)} alt="Preview"/>
          <p>{selectedFile.name}</p>
          <p>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          <button onClick={handleRemoveImage}>{removeImageButtonText}</button>
        </div>
      )}
    </div>
  )
}
