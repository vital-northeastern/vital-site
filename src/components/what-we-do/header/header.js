import React from "react"
import { H1, P } from "../../../constants/typography"
import { HeaderContainer, TextContainer } from "./header-styles"

const Header = ({ title, subheading }) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H1>{title}</H1>
        <P>{subheading}</P>
      </TextContainer>
    </HeaderContainer>
  )
}

export default Header
