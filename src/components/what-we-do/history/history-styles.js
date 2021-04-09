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
    padding-left: 40px;
  }
  @media ${devices.laptop} {
    padding-left: 75px;
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
