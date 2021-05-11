import styled from "styled-components"
import { devices } from "../../../constants/devices"
import Img from "gatsby-image"
import { HName } from "../../../constants/typography"
import {
  CaseCompImageContainer,
  CaseCompTextContainer,
} from "../section-styles"

const TextContainer = styled(CaseCompTextContainer)`
  @media ${devices.mobile} {
    order: 1;
  }
  @media ${devices.laptop} {
    width: 52%;
    order: 2;
    padding-left: 13%;
    padding-right: 0;
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

const HNameCustom = styled(HName)`
  margin-bottom: 0.85rem;
  @media ${devices.mobile} {
    margin-top: 0.85rem;
    display: inline;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    display: block;
    line-height: 19px;
  }
  @media (min-width: 1600px) {
    line-height: 21px;
  }
`

const Space = styled.span`
  @media ${devices.laptop} {
    display: none;
  }
`

const HHICImageContainer = styled(CaseCompImageContainer)`
  @media ${devices.mobile} {
    order: 2;
  }
  @media ${devices.laptop} {
    width: 48%;
    order: 1;
  }
  @media ${devices.desktop} {
    width: 47%;
  }
`

export { TextContainer, HNameCustom, Space, Image, HHICImageContainer }
