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
import bg_svg from "../../../images/platform.svg"

const Platforms = ({ title, platforms }) => {
  return (
    <PlatformsContainer>
      <Title>
        <H2>{title}</H2>
      </Title>
      <ImageContainer>
        <Image src={bg_svg} alt="blue and white geometric shape" />
      </ImageContainer>
      {platforms.map((platform, index) => {
        return (
          <Platform num={index} key={platform.platformTitle}>
            <LineContainer num={index}>
              <Line />
              <Dot />
            </LineContainer>
            <PlatformContent num={index}>
              <PlatformTitle>{platform.platformTitle}</PlatformTitle>
              <P>{platform.blurb}</P>
              <a href={platform.ctaLink} target="_blank" rel="noreferrer">
                <PlatformButton primary={true} aria-label={platform.ctaTitle}>
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
