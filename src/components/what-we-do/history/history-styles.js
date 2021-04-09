import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices } from "../../../constants/devices"

const HistoryContainer = styled.div`
  margin: 50px 0px;
`

const Title = styled.div`
  @media ${devices.mobile} {
    padding-left: 30px;
  }
  @media ${devices.tablet} {
    padding-left: 75px;
  }
`

const RegularImage = styled(Img)`
  @media (max-width: ${size.tablet}px) {
    display: none;
  }
`

const MobileImage = styled(Img)`
  @media ${devices.tablet} {
    display: none;
  }
`

export { HistoryContainer, Title, RegularImage, MobileImage }
