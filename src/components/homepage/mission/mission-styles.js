import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { P } from "../../../constants/typography"
import { navyBlue } from "../../../constants/colors"

const MissionContainer = styled.div`
  color: ${navyBlue};
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  @media ${devices.mobileMax} {
    padding: 0 ${padding.mobile};
    margin-bottom: 100px;
  }
`

const MissionText = styled(P)`
  max-width: 380px;
  @media ${devices.mobileMax} {
    max-width: initial;
  }
`

export { MissionContainer, MissionText }
