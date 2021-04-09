import styled from "styled-components"
import { devices } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"
import Img from "gatsby-image"

const Container = styled.div`
  justify-content: center;
  @media ${devices.mobile} {
    display: block;
    padding: 8px 30px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px 40px;
  }
  @media ${devices.laptop} {
    padding: 8px 75px;
    display: flex;
    margin-bottom: -20px;
  }
`

const TextContainer = styled.div`
  width: 45%;
  color: ${darkGray};
  @media ${devices.tabletMax} {
    width: 100%;
    margin: 0 auto;
  }
`

const Text = styled.div`
  @media ${devices.laptop} {
    padding-right: 50px;
    position: relative;
    top: 50%;
    transform: translateY(-58%);
  }
`

const Image = styled(Img)`
  height: 100%;
  width: 55%;
  @media ${devices.tabletMax} {
    display: none;
  }
`

const MobileImage = styled(Img)`
  @media ${devices.laptop} {
    display: none;
  }
`

export { Container, TextContainer, Text, Image, MobileImage }
