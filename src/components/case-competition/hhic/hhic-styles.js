import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { caseCompGradientV1, navyBlue } from "../../../constants/colors"
import Img from "gatsby-image"
import { H2, HName } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"

const Container = styled.div`
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

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
  }
  @media ${devices.laptop} {
    width: 52%;
    order: 2;
    padding-left: 13%;
  }
  @media ${devices.desktop} {
    width: 53%;
    padding-left: 15%;
  }
`

const Image = styled(Img)`
  @media ${devices.laptop} and (max-width: 1199px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 13%;
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: -5.5%;
    left: 13%;
  }
  @media ${devices.desktop} {
    position: absolute;
    top: -6%;
    left: 18%;
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

const HNameCustom = styled(HName)`
  margin-bottom: 0.7rem;
  @media ${devices.mobile} {
    margin-top: 0.85rem;
    display: inline;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    display: block;
  }
  line-height: 24px;
`

const Space = styled.span`
  @media ${devices.laptop} {
    display: none;
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
    margin-top: 2rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    width: 48%;
    order: 1;
    background: ${caseCompGradientV1};
  }
  @media ${devices.desktop} {
    width: 47%;
  }
`

export {
  Container,
  TextContainer,
  H2Title,
  HNameCustom,
  Space,
  ButtonContainer,
  ClubProgrammingButton,
  Image,
  ImageContainer,
}
