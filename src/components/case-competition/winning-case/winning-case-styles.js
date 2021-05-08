import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import Img from "gatsby-image"
import { P } from "../../../constants/typography"
import { CaseCompContainer } from "../section-styles"

const WinningCaseContainer = styled(CaseCompContainer)`
  @media ${devices.mobile} {
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 0rem ${padding.tablet} 2rem;
    margin-bottom: 20px;
  }
  @media ${devices.laptop} {
    padding: 5rem 0 5rem ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding: 5rem 0 5rem ${padding.desktop};
  }
`

const Image = styled(Img)`
  @media ${devices.laptop} {
    position: absolute;
    top: -22%;
    left: -13%;
  }
  @media ${devices.desktop} {
    top: -18%;
    left: -13%;
  }
`

const PCaption = styled(P)`
  @media ${devices.tabletMax} {
    display: none;
  }
  padding: 0 8%;
  margin-top: -10%;
  @media ${devices.desktop} {
    padding: 0 11%;
    margin-top: -8%;
  }
`

const PCaptionMobile = styled(P)`
  @media ${devices.laptop} {
    display: none;
  }
  margin-top: 2rem;
`

export { WinningCaseContainer, Image, PCaption, PCaptionMobile }
