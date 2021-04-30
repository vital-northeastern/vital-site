import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue, imageGradient } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 110px ${padding.laptop} 8px 150px;
    align-items: center;
    margin-bottom: -20px;
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
    width: 47%;
    order: 1;
    padding-right: 100px;
  }
`

const H2Title = styled(H2)`
  margin-bottom: 0.9rem;
  @media ${devices.mobile} {
    margin-top: 1.4rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    line-height: 38px;
  }
`

const BackgroundGradient = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
  }
  @media ${devices.laptop} {
    width: 51%;
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
