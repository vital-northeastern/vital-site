import styled from "styled-components"
import { darkGray } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"

const Container = styled.div`
  @media ${devices.mobile} {
    padding: 35px ${padding.mobile} 8px;
  }
  @media ${devices.tablet} {
    padding: 35px ${padding.tablet} 8px;
  }
  @media ${devices.laptop} {
    padding: 35px ${padding.laptop} 8px;
  }
`

const TextContainer = styled.div`
  width: 60%;
  color: ${darkGray};
`

export { Container, TextContainer }
