import styled from "styled-components"
import { devices } from "../constants/devices"

const ImageContainer = styled.div`
  z-index: -10;
  @media ${devices.tabletMax} {
    display: none;
  }
`

const Image = styled.img`
  position: absolute;
  margin-top: -3rem;
`

const PositionCardsContainer = styled.div`
  padding-top: 22px;
  @media ${devices.mobile} {
    padding-bottom: 30px;
  }
  @media ${devices.tablet} {
    padding-bottom: 50px;
  }
  @media ${devices.laptop} {
    display: flex;
    flex-wrap: wrap;
  }
`

export { ImageContainer, Image, PositionCardsContainer }
