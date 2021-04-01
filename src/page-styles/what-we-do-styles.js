import styled from "styled-components"
import { devices } from "../constants/devices"

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${devices.tabletMax} {
    display: inline-block;
    justify-content: center;
    margin: 0 auto;
  }
`

export { CardsContainer }
