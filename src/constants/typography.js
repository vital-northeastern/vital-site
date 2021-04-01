import styled from "styled-components"
import "./typefaces.css"
import { size, devices } from "./devices"

const fonts = {
  body: `'Work Sans', sans-serif`,
  futura: `'Futura', sans-serif`,
  futuraBook: `'Futura Book', sans-serif`,
  header: `'Futura Bold', sans-serif`,
  subheader: `'Futura Heavy', sans-serif`,
  button: `'Futura Book', sans-serif`,
}

const minSize = {
  h1: 52,
  h2: 35,
  hLower: 30,
  h3: 25,
  p: 12,
}

const fontSizes = {
  h1: `calc(${minSize.h1}px + (72 - ${minSize.h1}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h2: `calc(${minSize.h2}px + (45 - ${minSize.h2}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  hLower: `calc(${minSize.hLower}px + (34 - ${minSize.hLower}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h3: `calc(${minSize.h3}px + (30 - ${minSize.h3}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  p: `calc(${minSize.p}px + (15 - ${minSize.p}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
}

const textStyles = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
}

const fontWeights = {
  normal: `400px`,
  medium: `500px`,
  bold: `700px`,
  heavy: `900px`,
}

const H1 = styled.h1`
  font-size: ${fontSizes.h1};
  font-family: ${fonts.header};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  line-height: 60px;
`

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  letter-spacing: 0.1em;
  line-height: 58px;
`

const HLower = styled.h3`
  font-size: ${fontSizes.hLower};
  font-family: ${fonts.futura};
  font-weight: ${fontWeights.medium};
  text-transform: ${textStyles.lowercase};
  line-height: 26px;

  @media ${devices.mobileMax} {
    line-height: 24px;
  }
`

const HCapitalize = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.futuraBook};
  font-weight: ${fontWeights.normal};
  text-transform: ${textStyles.capitalize};
  letter-spacing: 1px;
  line-height: 26px;

  @media ${devices.mobileMax} {
    line-height: 24px;
  }
`

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.bold};
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
    line-height: 26px;
  }
`

export { fonts, H1, H2, HLower, HCapitalize, H3, P }
