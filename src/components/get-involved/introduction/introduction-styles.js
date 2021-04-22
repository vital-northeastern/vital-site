import styled from "styled-components"
import { darkGray } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"

const Container = styled.div`
  display: flex;
  @media ${devices.mobile} {
    padding: 0px 0px 8px ${padding.mobile};
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
    padding-top: 40px;
  }
  @media ${devices.tablet} {
    width: 60%;
    padding-top: 0px;
  }
  color: ${darkGray};
`

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: -10;
  margin-top: -3.2rem;
  @media ${devices.mobile} {
    width: 45%;
    overflow-x: hidden;
  }
  @media (min-width: 500px) {
    display: none;
  }
`

export { Container, TextContainer, ImageContainer }
