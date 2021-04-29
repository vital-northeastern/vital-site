import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 290px;
    display: flex;
    margin-bottom: -20px;
  }
`

const TextContainer = styled.div`
  width: 45%;
  color: ${navyBlue};
  @media ${devices.tabletMax} {
    width: 100%;
    margin: 0 auto;
  }
`

const Text = styled.div`
  @media ${devices.laptop} {
    padding-right: 90px;
  }
`

const BackgroundGradient = styled.div`
  padding-left: 6rem;
  width: 55%;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(36.48deg, #a8d2ff 24.89%, #5269e1 111.91%);
`

const Image = styled(Img)`
  position: absolute;
  top: -30px;
  left: -150px;
`

export { Container, TextContainer, Text, BackgroundGradient, Image }
