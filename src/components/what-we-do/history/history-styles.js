import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"

const HistoryContainer = styled.div`
  @media ${devices.mobile} {
    margin: 40px 0px 40px;
  }
  @media ${devices.tablet} {
    margin-top: 50px;
  }
  @media ${devices.laptop} {
    margin-bottom: 70px;
  }
  @media ${devices.desktop} {
    margin-top: 55px;
  }
`

const Title = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    margin-left: -130px;
  }
  @media ${devices.tablet} {
    margin-left: -90px;
  }
  @media ${devices.tabletMax} {
    overflow: hidden;
  }
  @media ${devices.laptop} {
    margin-left: 0px;
    margin-top: -25px;
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
    transform: scale(1.25, 1.25);
    padding-top: 90px;
    padding-bottom: 100px;
  }
  @media (min-width: 440px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  @media ${devices.tablet} {
    padding-bottom: 170px;
  }
  @media ${devices.laptop} {
    display: none;
  }
`

export { HistoryContainer, Title, ImageContainer, RegularImage, MobileImage }
