import styled from "styled-components"
import "./typefaces.css"
import { size, devices } from "./devices"
import { navyBlue, royalBlue } from "./colors"

const fonts = {
  body: `'Work Sans', sans-serif`,
  header: `'Work Sans', sans-serif`,
  subheader: `'Work Sans', sans-serif`,
  button: `'Futura Book', sans-serif`,
  nav: `'Futura Bold', sans-serif`,
  navButton: `'Futura', sans-serif`,
  connect: `'Futura Book', sans-serif`,
}

const minSize = {
  h1: 40,
  h2: 24,
  hName: 20,
  hUpper: 34,
  p: 13,
  pCard: 12,
}

const fontSizes = {
  h1: `calc(${minSize.h1}px + (62 - ${minSize.h1}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h2: `calc(${minSize.h2}px + (34 - ${minSize.h2}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  hName: `calc(${minSize.hName}px + (29 - ${minSize.hName}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  hUpper: `calc(${minSize.hUpper}px + (40 - ${minSize.hUpper}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  p: `calc(${minSize.p}px + (16 - ${minSize.p}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  pCard: `calc(${minSize.pCard}px + (15 - ${minSize.pCard}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
}

const textStyles = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  underline: "underline",
}

const fontWeights = {
  normal: `400`,
  medium: `500`,
  semiBold: `600`,
  bold: `700`,
  heavy: `900`,
}

const borders = {
  connect: `1px solid ${royalBlue}`,
  connectHover: `1px solid ${navyBlue}`,
}

const H1 = styled.h1`
  font-size: ${fontSizes.h1};
  font-family: ${fonts.header};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  letter-spacing: 1px;
  line-height: 41px;
`

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.semiBold};
  text-transform: ${textStyles.capitalize};
  line-height: 38px;
  color: ${navyBlue};
  @media ${devices.mobileMax} {
    font-size: 27px;
  }
`

const HName = styled(H2)`
  font-size: ${fontSizes.hName};
  @media ${devices.mobileMax} {
    font-size: 22px;
  }
`

const HUpper = styled.h2`
  font-size: ${fontSizes.hUpper};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.semiBold};
  text-transform: ${textStyles.uppercase};
  line-height: 26px;
  @media ${devices.mobileMax} {
    line-height: 24px;
  }
`

const P = styled.p`
  font-size: ${fontSizes.p};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  line-height: 24px;
  @media ${devices.mobileMax} {
    line-height: 22px;
  }
`

const PCard = styled.p`
  font-size: ${fontSizes.pCard};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  line-height: 24px;
  @media ${devices.mobileMax} {
    line-height: 22px;
  }
`

const Connect = styled.a`
  font-size: ${fontSizes.p};
  font-family: ${fonts.connect};
  font-weight: ${fontWeights.medium};
  text-decoration: none;
  border-bottom: ${borders.connect};
  letter-spacing: 0.1em;
  color: ${royalBlue};
  line-height: 22px;

  @media ${devices.mobileMax} {
    line-height: 20px;
  }
  &:hover {
    color: ${navyBlue};
    border-bottom: ${borders.connectHover};
  }
`

export { fonts, H1, H2, HName, HUpper, P, PCard, Connect }
