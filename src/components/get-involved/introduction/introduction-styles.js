import styled from "styled-components"
import { darkGray } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"

const Container = styled.div`
  display: flex;
  @media ${devices.mobile} {
    padding: 40px ${padding.mobile} 8px;
  }
  @media ${devices.tablet} {
    padding: 35px ${padding.tablet} 8px;
  }
  @media ${devices.laptop} {
    padding: 35px ${padding.laptop} 8px;
  }
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    width: 65%;
  }
  @media ${devices.tablet} {
    width: 60%;
  }
  color: ${darkGray};
`

const ImageContainer = styled.div`
  position: absolute;
  right: 30px;
  z-index: -10;
  @media ${devices.mobile} {
    width: 35%;
  }
  @media ${devices.tablet} {
    display: none;
  }
`

const MobileImage = styled.img`
  margin-top: 3rem;
  transform: scale(1.8, 1.8);
`

export { Container, TextContainer, ImageContainer, MobileImage }
