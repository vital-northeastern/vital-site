import styled from "styled-components"
import { size, devices } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 80px;
  @media (max-width: ${size.tablet}px) {
    display: block;
  }
`

const TextContainer = styled.div`
  width: 45%;
  padding-top: 50px;
  padding-right: 30px;
  color: ${darkGray};
  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 55%;
  @media ${devices.tabletMax} and ${devices.tablet} {
    padding-top: 50px;
  }
  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const Image = styled.img`
  max-height: 100%;
`

export { Container, TextContainer, ImageContainer, Image }
