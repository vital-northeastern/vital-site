import styled from "styled-components"
import { size, devices, padding } from "../../../constants/devices"

const HistoryContainer = styled.div`
  margin: 50px 0px 70px;
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
    margin-left: -35px;
  }
  @media (max-width: 450px) {
    overflow: hidden;
  }
  @media (min-width: 451px) and (max-width: ${size.laptop - 1}px) {
    overflow: hidden;
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
    padding-right: 10px;
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
  @media (min-width: 451px) and (max-width: ${size.tablet - 1}px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
  @media ${devices.tablet} {
    padding-top: 150px;
  }
  @media ${devices.laptop} {
    display: none;
    padding-top: 0px;
    margin-bottom: 0px;
  }
`

export { HistoryContainer, Title, ImageContainer, RegularImage, MobileImage }
