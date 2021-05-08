import styled from "styled-components"
import { devices, padding } from "../constants/devices"

const ProgrammingCardsIntro = styled.div`
  text-align: center;
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
    padding-right: ${padding.tablet};
    margin: 5rem 0 0 0;
  }
  @media ${devices.laptop} {
    margin-top: 6.5rem;
  }
  @media ${devices.desktop} {
    margin-top: 7rem;
  }
`

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
    padding: 0 5.7% 50px;
  }
  @media ${devices.desktop} {
    padding: 20px 8% 50px;
  }
`

export { ProgrammingCardsIntro, CardsContainer }
