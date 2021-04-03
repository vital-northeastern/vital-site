import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { size } from "../../constants/devices"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  padding-left: 80px;
  padding-top: 160px;
  padding-bottom: 40px;
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
  @media (max-width: 1200px) {
    opacity: ${props => (props.title.length > 15 ? "0" : "1")};
  }
`

export { HeaderContainer, TextContainer, ImageContainer, BackgroundShape }
