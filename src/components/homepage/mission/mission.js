import React from "react"

const Mission = ({ title, blurbText, ctaTitle, ctaLink }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{blurbText.blurbText}</p>
      <a href={ctaLink} target="_blank" rel="noreferrer">
        <button type="button" aria-label={ctaTitle}>
          {ctaTitle}
        </button>
      </a>
    </>
  )
}

export default Mission
