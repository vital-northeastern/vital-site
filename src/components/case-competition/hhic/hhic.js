import React from "react"
import { P } from "../../../constants/typography"
import {
  TextContainer,
  Image,
  HNameCustom,
  Space,
  HHICImageContainer,
} from "./hhic-styles"
import {
  CaseCompContainer,
  H2Title,
  ButtonContainer,
  CaseCompButton,
} from "../section-styles"

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
    <CaseCompContainer>
      <HHICImageContainer gradientV1={true}>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
      </HHICImageContainer>
      <TextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
        <HNameCustom>{introForNextDate}</HNameCustom>
        <Space> </Space>
        <HNameCustom>{nextDate}</HNameCustom>
        <ButtonContainer>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <CaseCompButton primary={true} aria-label={ctaTitle}>
              {ctaTitle}
            </CaseCompButton>
          </a>
        </ButtonContainer>
      </TextContainer>
    </CaseCompContainer>
  )
}

export default HHIC
