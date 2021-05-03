import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue, imageGradient } from "../../../constants/colors"
import Img from "gatsby-image"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: 28px ${padding.mobile} 8px;
    margin-bottom: 55px;
  }
  @media ${devices.tablet} {
    padding: 90px ${padding.tablet} 8px;
  }
  @media ${devices.laptop} {
    padding: 90px 0px 8px 175px;
    align-items: center;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding-left: 220px;
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
  }
  @media ${devices.laptop} {
    width: 50%;
    order: 1;
    padding-right: 110px;
  }
  @media ${devices.desktop} {
    padding-right: 200px;
  }
`

const MobileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
    margin-bottom: 0.5rem;
  }
  @media ${devices.laptop} {
    display: none;
  }
`

const MobileGradient = styled(Img)`
  @media ${devices.mobile} {
    width: 110%;
    margin-top: -30px;
  }
  @media ${devices.tablet} {
    margin-top: -40px;
  }
  height: 100%;
  z-index: -10;
`

const BackgroundGradient = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
  }
  @media ${devices.tabletMax} {
    display: none;
  }
  @media ${devices.laptop} {
    padding-left: 21px;
    width: 50%;
    order: 2;
    background: ${imageGradient};
  }
  @media ${devices.desktop} {
    padding-left: 35px;
  }
`

const CommunityImage = styled(Img)`
  ${({ mobile }) =>
    mobile &&
    `
@media ${devices.mobile} {
  margin-right: -212px;
}
@media ${devices.tablet} {
  margin-right: -270px;
}
align-self: flex-start;
width: 100%;
`}
  ${({ regular }) =>
    regular &&
    `
@media ${devices.laptop} {
  position: absolute;
  top: 45px;
  left: -80px;
}
@media ${devices.desktop} {
  left: -123px;
}
`}
`

export {
  Container,
  TextContainer,
  BackgroundGradient,
  CommunityImage,
  MobileImageContainer,
  MobileGradient,
}
