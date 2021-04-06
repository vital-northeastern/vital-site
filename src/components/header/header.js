import React from "react"
import { H1, P } from "../../constants/typography"
import {
  HeaderContainer,
  TextContainer,
  ImageContainer,
  BackgroundShape,
} from "./header-styles"
import header_shape from "../../images/header_svg.svg"

const Header = ({ title, subheading, imageBool }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H1>{title}</H1>
        <P>{subheading}</P>
      </TextContainer>
      <ImageContainer imageBool={imageBool}>
        <BackgroundShape
          src={header_shape}
          alt="geometric shape"
          title={title}
        />
      </ImageContainer>
    </HeaderContainer>
  )
}

export default Header
