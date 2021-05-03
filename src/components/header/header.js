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
import header_shape from "../../images/header_svg.svg"

const Header = ({ title, mobileTitle, subheading, imageBool }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H1Regular>{title}</H1Regular>
        <H1Mobile>{mobileTitle}</H1Mobile>
        <P>{subheading}</P>
      </TextContainer>
      {imageBool && (
        <ImageContainer>
          <BackgroundShape
            src={header_shape}
            alt="geometric shape"
            title={title}
          />
        </ImageContainer>
      )}
    </HeaderContainer>
  )
}

export default Header
