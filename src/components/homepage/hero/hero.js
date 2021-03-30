import React from "react"
import union from "../../../images/Union.svg"

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

        <ScrollCont>
          <ScrollText>scroll for more</ScrollText>
          <img src={union} alt="Down Arrow" />
        </ScrollCont>
      </InnerHeroContainer>
    </HeroContainer>
  )
}

export default Hero
