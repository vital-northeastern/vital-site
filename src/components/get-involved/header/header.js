import React from "react"
import { P } from "../../../constants/typography"
import {
  HeaderContainer,
  TextContainer,
  H1Title,
  TwoColumns,
  InvolvementColumn,
  InvolvementTitle,
  InvolvementBlurb,
  BlurbText,
  DisclaimerText,
  Disclaimer,
} from "./header-styles"

const Header = ({
  title,
  subheading,
  involvementIntroTitle,
  involvementBlurb,
  disclaimer,
}) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H1Title>{title}</H1Title>
        <P>{subheading}</P>
        <TwoColumns>
          <InvolvementColumn>
            <InvolvementTitle>{involvementIntroTitle}</InvolvementTitle>
            <InvolvementBlurb>
              <BlurbText>{involvementBlurb}</BlurbText>
            </InvolvementBlurb>
          </InvolvementColumn>
          <Disclaimer>
            <DisclaimerText>{disclaimer}</DisclaimerText>
          </Disclaimer>
        </TwoColumns>
      </TextContainer>
    </HeaderContainer>
  )
}

export default Header
