import styled from "styled-components"
import { white, headerGradient } from "../../../constants/colors"
import { size } from "../../../constants/devices"
import { H1, HUpper, P } from "../../../constants/typography"

const fontSizes = {
  title: `calc(
    18px + (25 - 18) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  )`,
  body: `calc(14px + (17 - 14) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  disclaimer: `calc(12px + (14 - 12) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
}

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  padding-left: 75px;
  padding-top: 170px;
  padding-bottom: 45px;
`

const H1Title = styled(H1)`
  margin-bottom: 5px;
`

const TwoColumns = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: center;
`

const InvolvementColumn = styled.div`
  width: 50%;
`

const InvolvementTitle = styled(HUpper)`
  color: ${white};
  font-size: ${fontSizes.title};
  margin-bottom: 15px;
`

const InvolvementBlurb = styled.div`
  width: 100%;
`

const BlurbText = styled(P)`
  color: ${white};
  font-size: ${fontSizes.body};
  font-weight: 400;
`

const Disclaimer = styled.div`
  width: 50%;
`

const DisclaimerText = styled(P)`
  margin-left: 170px;
  width: 60%;
  color: ${white};
  font-size: ${fontSizes.disclaimer};
  font-weight: 400;
`

export {
  HeaderContainer,
  TextContainer,
  H1Title,
  TwoColumns,
  InvolvementColumn,
  InvolvementTitle,
  InvolvementBlurb,
  BlurbText,
  Disclaimer,
  DisclaimerText,
}
