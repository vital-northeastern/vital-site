import styled from "styled-components"
import { darkGray } from "../../../constants/colors"
import { devices } from "../../../constants/devices"

const Container = styled.div`
  @media ${devices.mobile} {
    padding: 35px 30px 8px;
  }
  @media ${devices.laptop} {
    padding: 35px 75px 8px;
  }
`

const TextContainer = styled.div`
  width: 60%;
  color: ${darkGray};
`

export { Container, TextContainer }
