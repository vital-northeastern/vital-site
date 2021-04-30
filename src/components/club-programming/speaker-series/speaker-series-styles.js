import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue, imageGradient } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: ${padding.mobile} ${padding.mobile} 0px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: ${padding.tablet} ${padding.tablet} 8px;
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 290px;
    margin-bottom: -20px;
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
  }
  @media ${devices.laptop} {
    width: 45%;
    order: 1;
    padding-right: 90px;
  }
`

const H2Title = styled(H2)`
  margin-bottom: 0.85rem;
  @media ${devices.mobile} {
    margin-top: 0.85rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
  }
`

const BackgroundGradient = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
  }
  @media ${devices.laptop} {
    width: 55%;
    order: 2;
    background: ${imageGradient};
  }
`

const Image = styled(Img)`
  @media ${devices.laptop} {
    position: absolute;
    top: -30px;
    left: -30px;
  }
`

export { Container, TextContainer, H2Title, BackgroundGradient, Image }
