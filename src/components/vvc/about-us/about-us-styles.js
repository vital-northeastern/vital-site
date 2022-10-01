import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 2rem ${padding.mobile} 1rem;
  }
  @media ${devices.tablet} {
    padding: 2rem ${padding.tablet} 1rem;
  }
  @media ${devices.laptop} {
    padding: 4rem ${padding.laptop};
    align-items: center;
  }
  @media ${devices.desktop} {
    padding: 4rem ${padding.desktop};
  }
`

const TextContainer = styled.div`
  @media ${devices.tabletMax} {
    width: 100%;
    margin: 0 auto;
  }
  @media ${devices.laptop} {
    padding-right: 2rem;
    width: 73%;
  }
`

const Image = styled(Img)`
  height: 100%;
  margin-top: 2.5rem;

  @media ${devices.mobile} {
    width: 70%;
    z-index: -1;
    left: 30%;
    margin-top: -0.1rem;
  }

  @media ${devices.laptop} {
    width: 40%;
    z-index: -1;
    left: 60%;
    margin-top: -7rem;
  }
`

export { Container, TextContainer, Image }
