import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices } from "../../constants/devices"
import { P, HLower } from "../../constants/typography"

const fontSizes = {
  title: `calc(
    20px + (25 - 20) *
      ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
}

const PositionContainer = styled.div`
  @media ${devices.laptop} {
    margin-left: ${props => (props.index % 2 == 0 ? "5rem" : "50px")};
  }
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  height: 16rem;
  width: 29rem;
`

const FlexContainer = styled.div`
  display: flex;
  float: left;
  width: 30%;
`

const PositionImg = styled(Img)`
  display: inline-block;
  width: 100%;
  height: auto;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 20px;
  width: 70%;
  @media ${devices.mobile} {
    justify-content: normal;
  }
`

const TextContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding-bottom: 0px;
`

const PositionName = styled(HLower)`
  text-transform: capitalize;
  color: #133e6c;
  margin: auto;
  padding-top: 1rem;
  font-size: ${fontSizes.title};
`

const PositionDescription = styled(P)`
  line-height: 21px;
  padding-top: 15px;
`

export {
  PositionContainer,
  FlexContainer,
  PositionImg,
  InfoContainer,
  TextContainer,
  PositionName,
  PositionDescription,
}
