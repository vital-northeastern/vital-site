import styled from "styled-components"
import { MemberImg } from "../team-shared-styles"
import { devices } from "../../../constants/devices"

const AdvisorCard = styled.div`
  width: 28%;
  max-width: 350px;
  margin: 0 0 72px 0;
  display: flex;
  flex-direction: column;

  @media only screen and ${devices.mobileMax} {
    width: 95%;
    flex-direction: row;
    margin: 0 0 36px 0;
  }
`

const AdvisorImage = styled(MemberImg)`
  padding-top: 100% !important;
  margin-bottom: 18px;
  @media only screen and ${devices.mobileMax} {
    padding-top: 50% !important;
    margin-right: 16px;
  }
`

const AdvisorInfoContainer = styled.div``

export { AdvisorCard, AdvisorImage }
