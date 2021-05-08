import styled from "styled-components"
import { devices, padding } from "../../constants/devices"
import {
  caseCompGradientV1,
  caseCompGradientV2,
  navyBlue,
} from "../../constants/colors"
import { H2 } from "../../constants/typography"
import { Button } from "../../constants/buttons"

const CaseCompContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: ${padding.mobile} ${padding.mobile} 0px;
    margin-bottom: 10px;
  }
  @media ${devices.tablet} {
    padding: 3rem ${padding.tablet} 2rem;
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
  @media ${devices.mobile} {
    margin-top: 0.85rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    line-height: 38px;
  }
  padding-right: 25%;
  @media ${devices.laptop} and (max-width: 1210px) {
    padding-right: 15%;
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
