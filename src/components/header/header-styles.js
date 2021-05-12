import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { devices, padding } from "../../constants/devices"
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
    padding: 130px ${padding.tablet} 15px;
  }
  @media ${devices.laptop} {
    padding: 170px ${padding.laptop} 40px;
  }
  @media ${devices.desktop} {
    padding: 190px ${padding.desktop} 50px;
  }
`

const H1Regular = styled(H1)`
  ${({ mobileTitle }) =>
    mobileTitle &&
    `
  @media ${devices.mobileMax} {
    display: none;
  }
`}
`

const H1Mobile = styled(H1)`
  @media (max-width: 400px) {
  }
  ${({ longTitle }) =>
    longTitle &&
    `
@media (max-width: 400px) {
  font-size: 38px;
}
@media (max-width: 360px) {
  font-size: 33px;
}
`}
  @media ${devices.tablet} {
    display: none;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: -10px;
  right: 0;
  width: auto;
  @media (max-width: 1200px) {
    display: ${props => (props.title.length > 15 ? "none" : "inline")};
  }
  @media ${devices.tabletMax} {
    display: none;
  }
  @media ${devices.desktop} {
    top: 0;
  }
`

const BackgroundShape = styled.img`
  @media ${devices.desktop} {
    transform: scale(1.07, 1.07);
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
