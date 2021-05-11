import React from "react"
import { P } from "../../constants/typography"
import {
  HeaderContainer,
  TextContainer,
  H1Regular,
  H1Mobile,
  ImageContainer,
  BackgroundShape,
} from "./header-styles"
import header_shape from "../../images/new_header.svg"

const Header = ({ title, mobileTitle, subheading, imageBool, longTitle }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H1Regular mobileTitle={mobileTitle}>{title}</H1Regular>
        {mobileTitle && (
          <H1Mobile longTitle={longTitle}>{mobileTitle}</H1Mobile>
        )}
        <P>{subheading}</P>
      </TextContainer>
      {imageBool && (
        <ImageContainer title={title}>
          <BackgroundShape src={header_shape} alt="geometric shape" />
        </ImageContainer>
      )}
    </HeaderContainer>
  )
}

export default Header
