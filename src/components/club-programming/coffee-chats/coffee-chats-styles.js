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
    padding: 110px ${padding.laptop} 8px 11%;
    align-items: center;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding-left: 13%;
    padding-right: ${padding.desktop};
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
  }
  @media ${devices.laptop} {
    width: 55%;
    order: 1;
    padding-left: 9%;
    padding-right: 11%;
  }
  @media ${devices.desktop} {
    padding-left: 10.8%;
    padding-right: 12.8%;
  }
`

export { Container, TextContainer }
