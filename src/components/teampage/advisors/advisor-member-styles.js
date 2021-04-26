import styled from "styled-components"
import { MemberImg } from "../team-shared-styles"

const AdvisorCard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`

const AdvisorImage = styled(MemberImg)`
  padding-top: 100% !important;
`

export { AdvisorCard, AdvisorImage }
