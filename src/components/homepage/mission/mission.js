import React from "react"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{blurbText.blurbText}</p>
      <a href={ctaLink}>
        <button type="button">{ctaTitle}</button>
      </a>
    </>
  )
}

export default Mission
