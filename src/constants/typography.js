import styled from "styled-components"
import "./typefaces.css"

const fonts = {
  workSans: `'Work Sans', sans-serif`,
  futura: `'Futura', sans-serif`,
  futuraBold: `'Futura Bold', sans-serif`,
  futuraHeavy: `'Futura Heavy', sans-serif`,
}

const fontSizes = {
  h1: `calc(40px + (90 - 40) * ((100vw - 320px) / (1440 - 320)))`,
  h2: `calc(30px + (50 - 30) * ((100vw - 320px) / (1440 - 320)))`,
  h3: `calc(22px + (20 - 22) * ((100vw - 320px) / (1440 - 320)))`,
  p: `calc(14px + (22 - 14) * ((100vw - 320px) / (1440 - 320)))`,
}

const fontStyles = {
  italic: "italic",
}

const fontWeights = {
  normal: `400px`,
  bold: `700px`,
  heavy: `900px`,
}

const H1 = styled.h1`
  font-size: ${fontSizes.h1};
  font-family: ${fonts.futuraBold};
  font-weight: ${fontWeights.medium};
`

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.cormorant};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.bold};
`

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.aktiv};
  font-style: ${fontStyles.italic};
  font-weight: ${fontWeights.medium};
`

const P = styled.p`
  font-size: ${fontSizes.p};
  font-family: ${fonts.workSans};
  font-weight: ${fontWeights.normal};
`

export { H1, H2, H3, P }
