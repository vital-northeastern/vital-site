import styled from "styled-components"
import "./typefaces.css"
import { size, devices } from "./devices"

const fonts = {
  body: `'Work Sans', sans-serif`,
  futura: `'Futura', sans-serif`,
  header: `'Futura Bold', sans-serif`,
  subheader: `'Futura Heavy', sans-serif`,
}

const minSize = {
  h1: 52,
  h2: 35,
  h3: 25,
  p: 14,
}

const fontSizes = {
  h1: `calc(${minSize.h1}px + (72 - ${minSize.h1}) * ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
  h2: `calc(${minSize.h2}px + (45 - ${minSize.h2}) * ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
  h3: `calc(${minSize.h3}px + (30 - ${minSize.h3}) * ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
  p: `calc(${minSize.p}px + (17 - ${minSize.p}) * ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
}

const textStyles = {
  uppercase: "uppercase",
}

const fontWeights = {
  normal: `400px`,
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

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  line-height: 26px;
`

const P = styled.p`
  font-size: ${fontSizes.p};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  line-height: 24px;

  @media ${devices.mobile} {
    line-height: 26px;
  }
`

export { H1, H2, H3, P }
