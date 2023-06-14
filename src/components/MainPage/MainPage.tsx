import React from 'react'
export interface MainPageProps {
  title: string,
  subtitle: string,
  paragraphs?: string[],
  images?: {
    src: string,
    alt: string,
    text: string
  }[],
  buttonText: string,
  nextPage: () => void
}

export const MainPage = (props: MainPageProps) => {
  const {title, subtitle, images, buttonText, nextPage, paragraphs} = props

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      {paragraphs && paragraphs.map((paragraph, index) => {
          return (
            <p key={index}>{paragraph}</p>
          )
        }
      )}

      {images && images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.src} alt={image.alt}/>
            <p>{image.text}</p>
          </div>
        )
      })}
      <button onClick={nextPage}>{buttonText}</button>
    </div>
  )
}
