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
  overflow: hidden;
`

const RegularImage = styled.img`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: block;
  }
`

const MobileImage = styled.img`
  margin: -20px;
  @media ${devices.tablet} {
    display: none;
  }
`

export { HistoryContainer, Title, ImageContainer, RegularImage, MobileImage }
