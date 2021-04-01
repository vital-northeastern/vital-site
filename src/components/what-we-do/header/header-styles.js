import styled from "styled-components"
import { white, headerGradient } from "../../../constants/colors"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  padding-left: 50px;
  padding-top: 150px;
  padding-bottom: 25px;
`

export { HeaderContainer, TextContainer }
