import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
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
  @media ${devices.desktop} {
    padding-left: 340px;
    padding-right: ${padding.desktop};
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
    padding-top: 1.5rem;
    padding-right: 80px;
  }
  @media ${devices.desktop} {
    padding-top: 3rem;
    padding-right: 100px;
  }
`

const Image = styled(Img)`
  @media ${devices.laptop} and (max-width: 1199px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    right: 14%;
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: -35px;
    left: -35px;
  }
`

export { Container, TextContainer, Image }
