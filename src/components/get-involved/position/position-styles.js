import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices, padding } from "../../../constants/devices"
import { PCard, H2 } from "../../../constants/typography"
import { beauBlue, periwinkle, royalBlue } from "../../../constants/colors"

function backgroundColor(index) {
  if (index === 0 || index % 3 === 0) {
    return beauBlue
  } else if ((index + 1) % 3 === 0) {
    return periwinkle
  } else {
    return royalBlue
  }
}

const fontSizes = {
  title: `calc(
    16px + (23 - 16) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  )`,
}

const PositionContainer = styled.div`
  z-index: 1;
  @media ${devices.tabletMax} {
    overflow: hidden;
    overflow-x: hidden;
  }
  @media ${devices.mobile} {
    width: 100vw;
    height: auto;
    margin-bottom: 0.7rem;
    padding-left: ${padding.mobile};
  }
  @media ${devices.tablet} {
    display: flex;
    width: 70vw;
    margin: 0 auto 1rem auto;
    padding-left: 0px;
  }
  @media ${devices.laptop} {
    width: 41vw;
    height: 15.5rem;
    margin-left: ${props =>
      props.index % 2 === 0 ? `${padding.laptop}` : "0px"};
    margin-bottom: 1rem;
  }
  @media ${devices.desktop} {
    width: 37vw;
    margin-left: ${props =>
      props.index % 2 === 0 ? `${padding.desktop}` : "0px"};
    height: auto;
  }
`

const FlexContainer = styled.div`
  display: flex;
  float: left;
  @media ${devices.mobile} {
    width: 27%;
  }
  @media ${devices.tablet} {
    width: 30%;
  }
`

const PositionImg = styled(Img)`
  display: inline-block;
  width: 91%;
  height: auto;
`

const BackgroundColor = styled.div`
  width: 9%;
  background-color: ${props => backgroundColor(props.index)};
`

const InfoContainer = styled.div`
  display: flex;
  position: relative;
  @media ${devices.mobile} {
    width: 73%;
    padding-left: 22px;
  }
  @media ${devices.tablet} {
    width: 70%;
    padding-left: 25px;
  }
`

const TextContainer = styled.div`
  position: relative;
  padding-bottom: 0px;
`

const PositionName = styled(H2)`
  font-size: ${fontSizes.title};
  color: #133e6c;
  @media ${devices.mobile} {
    line-height: 20px;
    padding-right: ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding-top: 10px;
    line-height: 30px;
  }
  margin-bottom: 12px;
`

const PositionDescription = styled(PCard)`
  @media ${devices.mobile} {
    line-height: 21px;
    padding-right: ${padding.mobile};
  }
  @media ${devices.tablet} {
    line-height: 23px;
    padding-right: 0px;
  }
  @media ${devices.desktop} {
    line-height: 25px;
  }
`

export {
  PositionContainer,
  FlexContainer,
  PositionImg,
  BackgroundColor,
  InfoContainer,
  TextContainer,
  PositionName,
  PositionDescription,
}
