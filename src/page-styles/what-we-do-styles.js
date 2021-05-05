import styled from "styled-components"
import { devices, padding } from "../constants/devices"

const CardsContainer = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
    display: inline-block;
    justify-content: center;
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
    padding-right: ${padding.tablet};
  }
  @media ${devices.laptop} {
    display: flex;
    justify-content: center;
    padding: 50px 5.7%;
  }
  @media ${devices.desktop} {
    padding-left: 8%;
    padding-right: 8%;
  }
`

export { CardsContainer }
