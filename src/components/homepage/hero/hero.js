import React from "react"
import union from "../../../images/Union.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

import {
  HeroContainer,
  InnerHeroContainer,
  SmallTitle,
  BigTitle,
  SubHeading,
  ScrollCont,
  ScrollText,
} from "../hero/hero-styles"

const Hero = ({ smallTitle, bigTitle, subheading }) => {
  return (
    <HeroContainer>
      <InnerHeroContainer>
        <SmallTitle>{smallTitle}</SmallTitle>
        <BigTitle>{bigTitle}</BigTitle>
        <SubHeading>{subheading}</SubHeading>
        <ScrollCont onClick={() => scrollTo("#scrollDownHero")}>
          <ScrollText>scroll for more</ScrollText>
          <img src={union} alt="Down Arrow" />
        </ScrollCont>
        <div id="scrollDownHero"></div>
      </InnerHeroContainer>
    </HeroContainer>
  )
}

export default Hero
