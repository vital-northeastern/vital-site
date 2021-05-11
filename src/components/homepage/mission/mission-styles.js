import styled from "styled-components"
import { P } from "../../../constants/typography"

const colors = {
  primary: "#001049", // dark blue
  secondary: "#607AE6", // light blue
}

const MissionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`

const MissionText = styled(P)`
  width: 450px;
`

export { MissionContainer, MissionText }
