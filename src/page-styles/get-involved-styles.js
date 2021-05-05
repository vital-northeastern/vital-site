import styled from "styled-components"
import { devices, padding } from "../constants/devices"

const PaddingContainer = styled.div`
  @media ${devices.mobile} {
    padding: 0px ${padding.mobile} 10px;
  }
  @media ${devices.tablet} {
    padding: 35px ${padding.tablet} 10px;
  }
  @media ${devices.laptop} {
    padding: 35px ${padding.laptop} 10px;
  }
  @media ${devices.desktop} {
    padding: 35px ${padding.desktop} 10px;
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
    padding-left: ${padding.laptop};
    padding-right: ${padding.laptop};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
    padding-right: ${padding.desktop};
  }
`

export { PaddingContainer, PositionCardsContainer }
