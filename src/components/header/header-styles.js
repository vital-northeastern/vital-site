import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { size, devices } from "../../constants/devices"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    padding: 130px 0px 15px 30px;
  }
  @media ${devices.tablet} {
    padding-left: 40px;
  }
  @media ${devices.laptop} {
    padding: 170px 0px 40px 75px;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: auto;
  opacity: ${props => (props.imageBool ? "1" : "0")};
  display: ${props => (props.imageBool ? "inline" : "none")};
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
