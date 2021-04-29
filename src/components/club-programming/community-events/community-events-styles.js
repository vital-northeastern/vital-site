import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
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
    padding: 90px ${padding.laptop} 8px 150px;
    align-items: center;
    margin-bottom: -20px;
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    margin: 0 auto;
    order: 2;
  }
  @media ${devices.laptop} {
    width: 45%;
    margin: 0 auto;
    order: 1;
  }
`

const Text = styled.div`
  @media ${devices.laptop} {
    padding-right: 35px;
  }
`

const H2Title = styled(H2)`
  line-height: 40px;
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    margin: 0 auto;
    order: 1;
  }
  @media ${devices.laptop} {
    width: 55%;
    padding-left: 50px;
    order: 2;
  }
`

const Image = styled(Img)`
  height: 100%;
`

export { Container, TextContainer, Text, H2Title, ImageContainer, Image }
