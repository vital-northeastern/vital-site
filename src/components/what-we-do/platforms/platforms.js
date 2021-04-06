import React from "react"
import { H2, P } from "../../../constants/typography"
import {
  PlatformsContainer,
  Title,
  Platform,
  LineContainer,
  Line,
  Dot,
  PlatformContent,
  PlatformTitle,
  PlatformButton,
  ImageContainer,
  Image,
} from "./platforms-styles"
import shape from "../../../images/platforms_shape.png"

const Platforms = ({ title, platformOne, platformTwo }) => {
  return (
    <PlatformsContainer>
      <Title>
        <H2>{title}</H2>
      </Title>
      <ImageContainer>
        <Image src={shape} alt="blue and white geometric shape" />
      </ImageContainer>
      <Platform num={1}>
        <LineContainer num={1}>
          <Line />
          <Dot />
        </LineContainer>
        <PlatformContent num={1}>
          <PlatformTitle>{platformOne.platformTitle}</PlatformTitle>
          <P>{platformOne.blurb}</P>
          <a href={platformOne.ctaLink}>
            <PlatformButton primary={true}>
              {platformOne.ctaTitle}
            </PlatformButton>
          </a>
        </PlatformContent>
      </Platform>
      <Platform num={2}>
        <LineContainer num={2}>
          <Line />
          <Dot />
        </LineContainer>
        <PlatformContent num={2}>
          <PlatformTitle>{platformTwo.platformTitle}</PlatformTitle>
          <P>{platformTwo.blurb}</P>
          <a href={platformTwo.ctaLink}>
            <PlatformButton primary={true}>
              {platformTwo.ctaTitle}
            </PlatformButton>
          </a>
        </PlatformContent>
      </Platform>
    </PlatformsContainer>
  )
}

export default Platforms
