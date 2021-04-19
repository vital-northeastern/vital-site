import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { shadowGray } from "../../../constants/colors"

const Container = styled.div`
  margin: 0 auto 5rem auto;
  text-align: center;
  width: 100%;
`

const H2Header = styled(H2)`
  margin-bottom: 17px;
`

const ButtonEmail = styled(Button)`
  margin-top: -4px;
  box-shadow: 1px 1px 2px ${shadowGray};
  padding: 18px 45px;
`

export { Container, H2Header, ButtonEmail }
