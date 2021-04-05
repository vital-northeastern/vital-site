import React from "react"
import { H2, P } from "../../../constants/typography"
import { Title } from "./platforms-styles"
import { Button } from "../../../constants/buttons"

const Platforms = ({ title, platformOne, platformTwo }) => {
  return (
    <>
      <Title>
        <H2>{title}</H2>
        <div>
          <H2>{platformOne.platformTitle}</H2>
          <P>{platformOne.blurb}</P>
          <a href={platformOne.ctaLink}>
            <Button primary={true}>{platformOne.ctaTitle}</Button>
          </a>
        </div>
        <div>
          <H2>{platformTwo.platformTitle}</H2>
          <P>{platformTwo.blurb}</P>
          <a href={platformTwo.ctaLink}>
            <Button primary={true}>{platformTwo.ctaTitle}</Button>
          </a>
        </div>
      </Title>
    </>
  )
}

export default Platforms
