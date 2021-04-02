import styled from "styled-components"
import { navyBlue } from "../../constants/colors"

const AdvisorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const AdvisorsTitle = styled.h1`
  text-align: center;
  color: ${navyBlue};
`

export { AdvisorContainer, AdvisorsTitle }
