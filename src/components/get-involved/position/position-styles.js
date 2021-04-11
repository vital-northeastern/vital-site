import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices } from "../../../constants/devices"
import { PCard, H2 } from "../../../constants/typography"

const fontSizes = {
  title: `calc(
    17px + (23 - 17) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  )`,
}

const PositionContainer = styled.div`
  @media ${devices.mobile} {
    margin-left: 30px;
  }
  @media ${devices.tablet} {
    margin-left: 40px;
  }
  @media ${devices.laptop} {
    margin-left: ${props => (props.index % 2 === 0 ? "75px" : "50px")};
  }
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  height: 17rem;
  @media ${devices.mobile} {
    width: 100vw;
  }
  @media ${devices.tablet} {
    width: 75vw;
  }
  @media ${devices.laptop} {
    width: 40vw;
  }
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
  word-wrap: break-word;
`

const PositionName = styled(H2)`
  font-size: ${fontSizes.title};
  color: #133e6c;
  @media ${devices.tablet} {
    padding-top: 1rem;
  }
  line-height: 30px;
  margin-bottom: 12px;
`

const PositionDescription = styled(PCard)`
  line-height: 21px;
  @media ${devices.mobile} {
    margin-right: 60px;
  }
  @media ${devices.tablet} {
    margin-right: 0px;
  }
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
