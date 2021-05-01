import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: 0px ${padding.mobile} 0px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet} 30px;
  }
  @media ${devices.laptop} {
    padding: 110px ${padding.laptop} 135px 175px;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding-left: 220px;
    padding-right: ${padding.desktop};
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
    margin: 0 auto;
  }
  @media ${devices.laptop} {
    width: 50%;
    order: 1;
    padding-right: 70px;
    padding-bottom: 25px;
    align-self: center;
  }
  @media (min-width: 1200px) {
    width: 45%;
    padding-right: 100px;
  }
`

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
  }
  @media ${devices.laptop} {
    width: 50%;
    order: 2;
  }
  @media (min-width: 1200px) {
    width: 55%;
  }
`

const Gradient = styled(Img)`
  width: 100%;
  height: 100%;
  z-index: -10;
`

const Image = styled(Img)`
  margin-right: -200px;
  width: 120%;
`

export { Container, TextContainer, Background, Gradient, Image }
