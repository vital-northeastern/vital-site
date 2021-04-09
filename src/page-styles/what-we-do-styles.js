import styled from "styled-components"
import { devices } from "../constants/devices"

const CardsContainer = styled.div`
  @media ${devices.mobile} {
    padding-left: 30px;
    padding-right: 30px;
    display: inline-block;
    justify-content: center;
  }
  @media ${devices.tablet} {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media ${devices.laptop} {
    display: flex;
    justify-content: center;
    padding: 50px 0px 50px 0px;
    margin-left: 65px;
    margin-right: 65px;
  }
`

export { CardsContainer }
