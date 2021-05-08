import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { caseCompGradientV2, navyBlue } from "../../../constants/colors"
import Img from "gatsby-image"
import { H2, P } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: ${padding.mobile} ${padding.mobile} 0px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 0rem ${padding.tablet} 2rem;
    margin-bottom: 20px;
  }
  @media ${devices.laptop} {
    padding: 5rem 0 5rem ${padding.laptop};
    margin-bottom: 50px;
  }
  @media ${devices.desktop} {
    padding: 5rem 0 5rem ${padding.desktop};
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 50%;
    padding-right: 15%;
  }
`

const Image = styled(Img)`
  @media ${devices.laptop} {
    position: absolute;
    top: -22%;
    left: -13%;
  }
  @media ${devices.desktop} {
    position: absolute;
    top: -18%;
    left: -13%;
  }
`

const ButtonContainer = styled.div`
  margin-top: 1rem;
`

const ClubProgrammingButton = styled(Button)`
  padding: ${props => (props.morePadding ? "15px 37px" : "17px 30px")};
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

const ImageContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    margin-top: 2rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    width: 50%;
    background: ${caseCompGradientV2};
  }
`

const PCaption = styled(P)`
  @media ${devices.tabletMax} {
    display: none;
  }
  padding: 0 8%;
  margin-top: -10%;
  @media ${devices.desktop} {
    padding: 0 10%;
    margin-top: -8%;
  }
`

const PCaptionMobile = styled(P)`
  @media ${devices.laptop} {
    display: none;
  }
  margin-top: 2rem;
`

export {
  Container,
  TextContainer,
  H2Title,
  ButtonContainer,
  ClubProgrammingButton,
  Image,
  ImageContainer,
  PCaption,
  PCaptionMobile,
}
