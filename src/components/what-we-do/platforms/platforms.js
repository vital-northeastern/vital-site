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
import svg from "../../../images/platform.svg"

const Platforms = ({ title, platforms }) => {
  return (
    <PlatformsContainer>
      <Title>
        <H2>{title}</H2>
      </Title>
      <ImageContainer>
        <Image src={svg} alt="blue and white geometric shape" />
      </ImageContainer>
      {platforms.map((platform, index) => {
        return (
          <Platform num={index}>
            <LineContainer num={index}>
              <Line />
              <Dot />
            </LineContainer>
            <PlatformContent num={index}>
              <PlatformTitle>{platform.platformTitle}</PlatformTitle>
              <P>{platform.blurb}</P>
              <a href={platform.ctaLink}>
                <PlatformButton primary={true}>
                  {platform.ctaTitle}
                </PlatformButton>
              </a>
            </PlatformContent>
          </Platform>
        )
      })}
    </PlatformsContainer>
  )
}

export default Platforms
