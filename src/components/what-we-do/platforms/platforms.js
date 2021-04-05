import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  Title,
  PlatformOne,
  LineContainerOne,
  Line,
  Dot,
  PlatformOneContent,
  PlatformTwo,
  LineContainerTwo,
  PlatformTwoContent,
  PlatformTitle,
  PlatformButton,
} from "./platforms-styles"

const Platforms = ({ title, platformOne, platformTwo }) => {
  return (
    <>
      <Title>
        <H2>{title}</H2>
      </Title>
      <PlatformOne>
        <LineContainerOne>
          <Line />
          <Dot />
        </LineContainerOne>
        <PlatformOneContent>
          <PlatformTitle>{platformOne.platformTitle}</PlatformTitle>
          <P>{platformOne.blurb}</P>
          <a href={platformOne.ctaLink}>
            <PlatformButton primary={true}>
              {platformOne.ctaTitle}
            </PlatformButton>
          </a>
        </PlatformOneContent>
      </PlatformOne>
      <PlatformTwo>
        <LineContainerTwo>
          <Line />
          <Dot />
        </LineContainerTwo>
        <PlatformTwoContent>
          <PlatformTitle>{platformTwo.platformTitle}</PlatformTitle>
          <P>{platformTwo.blurb}</P>
          <a href={platformTwo.ctaLink}>
            <PlatformButton primary={true}>
              {platformTwo.ctaTitle}
            </PlatformButton>
          </a>
        </PlatformTwoContent>
      </PlatformTwo>
    </>
  )
}

export default Platforms
