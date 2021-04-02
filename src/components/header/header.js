import React from "react"
import { H1, P } from "../../constants/typography"
import {
  HeaderContainer,
  TextContainer,
  ImageContainer,
  BackgroundShape,
} from "./header-styles"
import shape from "../../images/header_shape.png"

const Header = ({ title, subheading, imageBool }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H1>{title}</H1>
        <P>{subheading}</P>
      </TextContainer>
      <ImageContainer imageBool={imageBool}>
        <BackgroundShape src={shape} alt="geometric shape" />
      </ImageContainer>
    </HeaderContainer>
  )
}

export default Header
