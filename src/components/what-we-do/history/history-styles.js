import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"

const HistoryContainer = styled.div`
  margin: 50px 0px;
`

const Title = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.laptop};
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    margin-left: -100px;
  }
  @media ${devices.tablet} {
    margin-left: 0px;
  }
`

const RegularImage = styled.img`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: block;
    transform: scale(1.06, 1.06);
    padding-right: 10px;
  }
`

const MobileImage = styled.img`
  @media ${devices.mobile} {
    transform: scale(1.15, 1.15);
    margin-top: 50px;
    margin-bottom: 100px;
  }
  @media ${devices.tablet} {
    display: none;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export { HistoryContainer, Title, ImageContainer, RegularImage, MobileImage }
