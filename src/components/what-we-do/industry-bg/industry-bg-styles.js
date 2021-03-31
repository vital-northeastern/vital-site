import styled from "styled-components"
import { size, devices } from "../../../constants/devices"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 80px;
`

const TextContainer = styled.div`
  width: 45%;
  padding-top: 50px;
  padding-right: 30px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 55%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Image = styled.img`
  height: 270px;
`

export { Container, TextContainer, ImageContainer, Image }
