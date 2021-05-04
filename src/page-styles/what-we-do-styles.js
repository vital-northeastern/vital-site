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
    padding: 50px 0px;
    margin-left: 5.6%;
    margin-right: 5.6%;
  }
  @media ${devices.desktop} {
    margin-left: 8.5%;
    margin-right: 8.5%;
  }
`

export { CardsContainer }
