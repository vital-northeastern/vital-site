import React from "react"
import { P } from "../../../constants/typography"
import {
  Container,
  TextContainer,
  Image,
  H2Title,
  HNameCustom,
  Space,
  ButtonContainer,
  ClubProgrammingButton,
  ImageContainer,
} from "./hhic-styles"

const HHIC = ({
  title,
  blurb,
  introForNextDate,
  nextDate,
  ctaTitle,
  ctaLink,
  featuredImage,
}) => {
  return (
    <Container>
      <ImageContainer background={true}>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </ImageContainer>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
        <HNameCustom>{introForNextDate}</HNameCustom>
        <Space> </Space>
        <HNameCustom>{nextDate}</HNameCustom>
        <ButtonContainer>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <ClubProgrammingButton primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </ClubProgrammingButton>
          </a>
        </ButtonContainer>
      </TextContainer>
    </Container>
  )
}

export default HHIC
