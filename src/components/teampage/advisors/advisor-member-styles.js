import styled from "styled-components"
import { devices } from "../../../constants/devices"

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

const AdvisorImg = styled.img`
  width: 100%;
  margin-bottom: 8%;
  @media only screen and ${devices.mobileMax} {
    width: 48%;
    margin-right: 4%;
    margin-bottom: 0;
    align-self: flex-start;
  }
`

export { AdvisorCard, AdvisorImg }
