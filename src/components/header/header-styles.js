import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { size, devices } from "../../constants/devices"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    padding-left: 35px;
    padding-bottom: 30px;
  }
  @media ${devices.tablet} {
    padding-left: 75px;
  }
  @media ${devices.laptop} {
    padding-bottom: 45px;
  }
  padding-top: 170px;
`

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: auto;
  opacity: ${props => (props.imageBool ? "1" : "0")};
`

const BackgroundShape = styled.img`
  padding-bottom: 490px;
  transform: rotate(11deg);
  @media (max-width: 1200px) {
    opacity: ${props => (props.title.length > 15 ? "0" : "1")};
  }
  @media (max-width: ${size.laptop}px) {
    opacity: 0;
  }
`

export { HeaderContainer, TextContainer, ImageContainer, BackgroundShape }
