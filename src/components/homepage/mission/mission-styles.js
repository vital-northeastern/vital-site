import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { P } from "../../../constants/typography"

const MissionContainer = styled.div`
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
`

export { MissionContainer, MissionText }
