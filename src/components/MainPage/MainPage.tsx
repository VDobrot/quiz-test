import React from 'react'
import { DataComponents } from "../../AppContext";
export interface MainPageProps {
  data: DataComponents["mainPage"] | DataComponents["instructionsPage"];
  nextPage: () => void
}

export const MainPage = (props: MainPageProps) => {
  const {data, nextPage} = props

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>

      {('paragraphs' in data) && data.paragraphs?.map((paragraph, index) => {
          return (
            <p key={index}>{paragraph}</p>
          )
        }
      )}

      {('images' in data) && data.images?.map((image, index) => {
        return (
          <div key={index}>
            <img src={image.src} alt={image.alt}/>
            <p>{image.text}</p>
          </div>
        )
      })}
      <button onClick={nextPage}>{data.buttonText}</button>
    </div>
  )
}
