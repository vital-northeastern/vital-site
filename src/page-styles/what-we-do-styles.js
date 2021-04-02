import styled from "styled-components"
import { devices } from "../constants/devices"

const CardsContainer = styled.div`
  @media ${devices.tablet} {
    display: inline-block;
    justify-content: center;
    margin: 0 auto;
  }
  @media ${devices.tabletMax} {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${devices.laptop} {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

export { CardsContainer }
