import React from "react"
import { P } from "../../../constants/typography"
import {
  WinningCaseContainer,
  Image,
  PCaption,
  PCaptionMobile,
} from "./winning-case-styles"
import {
  CaseCompTextContainer,
  H2Title,
  ButtonContainer,
  CaseCompButton,
  CaseCompImageContainer,
} from "../section-styles"

const WinningCase = ({
  title,
  blurb,
  ctaTitle,
  ctaLink,
  featuredImage,
  imageCaption,
}) => {
  return (
    <WinningCaseContainer>
      <CaseCompTextContainer>
        <H2Title>{title}</H2Title>
        <P>{blurb}</P>
        <ButtonContainer>
          <a href={ctaLink} target="_blank" rel="noreferrer">
            <CaseCompButton primary={false} aria-label={ctaTitle}>
              {ctaTitle}
            </CaseCompButton>
          </a>
        </ButtonContainer>
      </CaseCompTextContainer>
      <CaseCompImageContainer>
        <Image fluid={featuredImage.fluid} alt={featuredImage.description} />
        <PCaption>{imageCaption}</PCaption>
      </CaseCompImageContainer>
      <PCaptionMobile>{imageCaption}</PCaptionMobile>
    </WinningCaseContainer>
  )
}

export default WinningCase
