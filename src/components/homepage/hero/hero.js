import React from "react"
import union from "../../../images/Union.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

import {
  HeroContainer,
  HeroHex,
  InnerHeroContainer,
  SmallTitle,
  BigTitle,
  SubHeading,
  ScrollCont,
  ScrollText,
  SubHeadingHolder,
} from "../hero/hero-styles"

import threeDHeroHex from "../../../images/3d-hero-hex.svg"

const Hero = ({
  smallTitle,
  bigTitle,
  subheadingPartOne,
  subheadingPartTwo,
}) => {
  return (
    <HeroContainer>
      <HeroHex
        src={threeDHeroHex}
        alt={"Three dimentional geometric blue shape"}
        side={"left"}
      ></HeroHex>
      <HeroHex
        src={threeDHeroHex}
        alt={"Three dimentional geometric blue shape"}
        side={"right"}
      ></HeroHex>
      <InnerHeroContainer>
        <SmallTitle>{smallTitle}</SmallTitle>
        <BigTitle>
          {bigTitle}
          <SubHeadingHolder>
            <SubHeading>{subheadingPartOne}</SubHeading>
            <SubHeading>{subheadingPartTwo}</SubHeading>
          </SubHeadingHolder>
        </BigTitle>
      </InnerHeroContainer>
      <ScrollCont onClick={() => scrollTo("#scrollDownHero")}>
        <ScrollText>scroll for more</ScrollText>
        <img src={union} alt="Down Arrow" />
      </ScrollCont>
      <div id="scrollDownHero"></div>
    </HeroContainer>
  )
}

export default Hero
