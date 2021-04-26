import styled from "styled-components"
import { navyBlue } from "../../../constants/colors"
import { HUpper } from "../../../constants/typography"

const AdvisorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const AdvisorsTitle = styled(HUpper)`
  text-align: center;
  color: ${navyBlue};
  margin-bottom: 50px;
`

export { AdvisorContainer, AdvisorsTitle }
