import React from "react"

const Hero = ({ smallTitle, bigTitle, subheading }) => {
  return (
    <>
      <h3>{smallTitle}</h3>
      <h1>{bigTitle}</h1>
      <h5>{subheading}</h5>
    </>
  )
}

export default Hero
