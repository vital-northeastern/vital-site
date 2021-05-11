import styled from "styled-components"
import { devices, padding } from "../../constants/devices"
import { navyBlue } from "../../constants/colors"
import { H2 } from "../../constants/typography"
import { Button } from "../../constants/buttons"

const caseCompGradientV1 =
  "linear-gradient(81.34deg, rgba(255, 255, 255, 0.2) 23.63%, rgba(255, 255, 255, 0) 63.08%), linear-gradient(36.48deg, #A8D2FF 24.89%, #5269E1 56.16%, #5269E1 111.91%)"
const caseCompGradientV2 =
  "linear-gradient(282.69deg, #A8D2FF 41.54%, #5269E1 133.71%)"

const CaseCompContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: ${padding.mobile} ${padding.mobile} 0px;
    margin-bottom: 10px;
  }
  @media ${devices.tablet} {
    padding: 2rem ${padding.tablet} 2rem;
  }
  @media ${devices.laptop} {
    padding: 5rem ${padding.laptop} 5rem 0px;
    margin-bottom: 50px;
  }
  @media ${devices.desktop} {
    padding: 5rem ${padding.desktop} 5rem 0px;
  }
`

const CaseCompTextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 50%;
    padding-right: 15%;
  }
`

const ButtonContainer = styled.div`
  margin-top: 1.2rem;
  @media ${devices.tabletMax} {
    margin-bottom: 1rem;
  }
`

const CaseCompButton = styled(Button)`
  padding: 17px 30px;
`

const H2Title = styled(H2)`
  margin-bottom: 0.9rem;
  padding-right: 25%;
  @media ${devices.mobile} {
    margin-top: 0.85rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    line-height: 38px;
  }
  @media (min-width: 1600px) {
    line-height: 45px;
  }
  @media ${devices.laptop} and (max-width: 1210px) {
    padding-right: 15%;
  }
  @media (max-width: 374px) {
    padding-right: 0;
  }
`

const CaseCompImageContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    margin-top: 2rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    width: 50%;
    background: ${props =>
      props.gradientV1 ? caseCompGradientV1 : caseCompGradientV2};
  }
`

export {
  CaseCompContainer,
  CaseCompTextContainer,
  H2Title,
  ButtonContainer,
  CaseCompButton,
  CaseCompImageContainer,
}
