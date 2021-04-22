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

const Image2 = styled.img`
  position: absolute;
  transform: scale(0.85, 0.85);
  left: 32%;
  margin-top: 17rem;
  @media (max-width: 1220px) {
    transform: scale(0.75, 0.75);
    left: 30%;
  }
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

export { ImageContainer, Image, Image2, PositionCardsContainer }
