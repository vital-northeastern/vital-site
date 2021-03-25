import React from "react"

const Introduction = ({
  title,
  subheadingForTitle,
  involvementIntroTitle,
  involvementBlurb,
  disclaimer,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subheadingForTitle}</p>
      <h4>{involvementIntroTitle}</h4>
      <p>{involvementBlurb}</p>
      <p>{disclaimer}</p>
    </>
  )
}

export default Introduction
