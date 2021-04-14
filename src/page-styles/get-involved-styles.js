import styled from "styled-components"
import { devices } from "../constants/devices"

const PositionCardsContainer = styled.div`
  padding-top: 22px;
  padding-bottom: 50px;
  @media ${devices.laptop} {
    display: flex;
    flex-wrap: wrap;
  }
`

export { PositionCardsContainer }
