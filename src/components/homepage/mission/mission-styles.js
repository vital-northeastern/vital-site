import styled from "styled-components"
import { P } from "../../../constants/typography"

const MissionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`

const MissionText = styled(P)`
  max-width: 380px;
`

export { MissionContainer, MissionText }
