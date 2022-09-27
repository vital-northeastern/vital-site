import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"

const TestimonialContainer = styled.div`
  @media ${devices.mobile} {
    margin: 40px 0px 40px;
  }
  @media ${devices.laptop} {
    margin: 9rem 0;
  }
`

const ImageContainer = styled.div`
  @media (min-width: 650px) {
    margin-left: 23%;
  }
  @media ${devices.tablet} {
    margin-left: 30%;
  }
  @media ${devices.laptop} {
    margin-left: 0px;
  }
`

const RegularImage = styled.img`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.laptop} {
    display: block;
  }
  @media ${devices.desktop} {
    width: 100vw;
  }
`

const MobileImage = styled.img`
  @media ${devices.mobile} {
    padding-top: 2rem;
  }
  @media ${devices.tablet} {
    transform: scale(1.4, 1.4);
    padding-top: 12rem;
    padding-bottom: 8rem;
  }
  @media ${devices.laptop} {
    display: none;
  }
`

export { TestimonialContainer, ImageContainer, RegularImage, MobileImage }
