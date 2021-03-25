import React from "react"
import Img from "gatsby-image"

const Slack = ({ title, link, logo }) => {
  return (
    <>
      <a href={link}>
        <button type="button">{title}</button>
      </a>
      <Img className="featured" fluid={logo.fluid} alt={logo.description} />
    </>
  )
}

export default Slack
