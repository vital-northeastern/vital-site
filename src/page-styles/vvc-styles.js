import styled from "styled-components"
import { devices, padding } from "../constants/devices"

const OurServices = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
    margin: 4rem 0 0 0;
  }
  @media ${devices.tablet} {
    width: 85%;
    padding-left: ${padding.tablet};
    padding-right: ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.laptop};
    padding-right: ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
    padding-right: ${padding.desktop};
  }
`

const CardsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
    display: inline-block;
    justify-content: center;
  }
  @media ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: ${padding.tablet};
    padding-right: ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.laptop};
    padding-right: ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
    padding-right: ${padding.desktop};
  }
`

export { OurServices, CardsContainer }
