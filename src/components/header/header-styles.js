import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { size, devices, padding } from "../../constants/devices"
import { H1 } from "../../constants/typography"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    padding: 130px ${padding.mobile} 15px;
  }
  @media ${devices.tablet} {
    padding: 130px 0px 15px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 170px 0px 40px ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
  }
`

const H1Regular = styled(H1)`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: block;
  }
`

const H1Mobile = styled(H1)`
  @media ${devices.tablet} {
    display: none;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: auto;
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

export {
  HeaderContainer,
  TextContainer,
  H1Regular,
  H1Mobile,
  ImageContainer,
  BackgroundShape,
}
