import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 80px;
  @media screen and (max-width: 600px) {
    display: block;
  }
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
  max-height: 100%;
`

export { Container, TextContainer, ImageContainer, Image }
