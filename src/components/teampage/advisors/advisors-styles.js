import styled from "styled-components"
import { navyBlue } from "../../../constants/colors"
import { HUpper } from "../../../constants/typography"
import { devices } from "../../../constants/devices"

const AdvisorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;

  @media only screen and ${devices.mobileMax} {
    flex-direction: column;
    align-items: center;
  }
`

const AdvisorsTitle = styled(HUpper)`
  text-align: center;
  color: ${navyBlue};
  margin-bottom: 50px;
`

export { AdvisorContainer, AdvisorsTitle }
