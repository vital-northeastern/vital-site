import React from "react"

const Eboard = ({ title, description, ctaLink, ctaTitle }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={ctaLink}>
        <button type="button">{ctaTitle}</button>
      </a>
    </>
  )
}

export default Eboard
