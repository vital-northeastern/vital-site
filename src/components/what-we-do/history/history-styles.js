import styled from "styled-components"
import Img from "gatsby-image"
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

const RegularImage = styled(Img)`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
    display: block;
  }
`

const MobileImage = styled(Img)`
  @media ${devices.tablet} {
    display: none;
  }
`

export { HistoryContainer, Title, RegularImage, MobileImage }
