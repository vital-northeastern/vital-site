import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 170px ${padding.laptop} 8px 180px;
    align-items: center;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding-right: ${padding.desktop};
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 50%;
    padding-left: 75px;
  }
`

export { Container, TextContainer }
