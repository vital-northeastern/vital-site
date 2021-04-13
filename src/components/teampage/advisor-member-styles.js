import styled from "styled-components"
import { MemberImg, MemberName } from "./team-shared-styles"

const AdvisorCard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`

const AdvisorImage = styled(MemberImg)`
  padding-top: 100% !important;
`

const AdvisorName = styled(MemberName)`
  margin: 30px 0 12px 0;
`

export { AdvisorCard, AdvisorImage, AdvisorName }
