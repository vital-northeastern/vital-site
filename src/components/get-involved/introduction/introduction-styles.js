import styled from "styled-components"
import { devices } from "../../../constants/devices"

const Container = styled.div`
  display: flex;
  padding-bottom: 8px;
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    width: 64%;
    padding-top: 40px;
  }
  @media ${devices.tablet} {
    width: 60%;
    padding-top: 0px;
  }
  @media ${devices.laptop} {
    width: 58%;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: -10;
  margin-top: -3.8rem;
  overflow-x: hidden;
  @media ${devices.tablet} {
    display: none;
  }
`

export { Container, TextContainer, ImageContainer }
