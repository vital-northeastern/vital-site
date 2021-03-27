import styled from "styled-components"
import "./typefaces.css"

const fonts = {
  body: `'Work Sans', sans-serif`,
  futura: `'Futura', sans-serif`,
  header: `'Futura Bold', sans-serif`,
  subheader: `'Futura Heavy', sans-serif`,
}

const fontSizes = {
  h1: `calc(52px + (72 - 52) * ((100vw - 320px) / (1440 - 320)))`,
  h2: `calc(30px + (50 - 30) * ((100vw - 320px) / (1440 - 320)))`,
  h3: `calc(25px + (30 - 25) * ((100vw - 320px) / (1440 - 320)))`,
  p: `calc(14px + (17 - 14) * ((100vw - 320px) / (1440 - 320)))`,
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
`

export { H1, H2, H3, P }
