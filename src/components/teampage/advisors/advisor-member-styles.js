import styled from "styled-components"
import { devices } from "../../../constants/devices"
import Img from "gatsby-image"

const AdvisorCard = styled.div`
  width: 20%;
  max-width: 350px;
  margin: 0 16px 72px 16px;
  display: flex;
  flex-direction: column;

  @media only screen and ${devices.mobileMax} {
    width: 98%;
    margin: 0 0 36px 0;
    flex-direction: row;
  }
`

const AdvisorImg = styled(Img)`
  width: 100%;
  margin-bottom: 8%;
  @media only screen and ${devices.mobileMax} {
    margin-right: 4%;
    margin-bottom: 0;
  }
`

export { AdvisorCard, AdvisorImg }
