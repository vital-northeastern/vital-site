import styled from "styled-components"
import { Button } from "../../constants/buttons"

const GetInvolvedButton = styled(Button)`
  padding: 18px 45px;
  margin-top: ${props => (props.margintop ? "-4px" : "")};
`

export { GetInvolvedButton }
