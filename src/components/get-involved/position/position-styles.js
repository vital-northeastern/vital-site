import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices } from "../../../constants/devices"
import { PCard, H2 } from "../../../constants/typography"

const fontSizes = {
  title: `calc(
    13px + (23 - 13) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  )`,
}

const PositionContainer = styled.div`
  @media ${devices.mobile} {
    margin-left: 35px;
  }
  @media ${devices.laptop} {
    margin-left: ${props => (props.index % 2 === 0 ? "75px" : "50px")};
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

const PositionName = styled(H2)`
  font-size: ${fontSizes.title};
  color: #133e6c;
  padding-top: 1rem;
  line-height: 30px;
`

const PositionDescription = styled(PCard)`
  line-height: 21px;
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
