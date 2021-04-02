import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { size } from "../../constants/devices"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  padding-left: 50px;
  padding-top: 150px;
  padding-bottom: 35px;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  opacity: ${props => (props.imageBool ? "1" : "0")};
`

const BackgroundShape = styled.img`
  transform: rotate(11deg);
  @media (max-width: ${size.laptop}px) {
    opacity: 0;
  }
`

export { HeaderContainer, TextContainer, ImageContainer, BackgroundShape }
