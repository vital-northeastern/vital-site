import styled from "styled-components"
import { navyBlue } from "../../constants/colors"

export const MailingTitleHolder = styled.div`
  text-align: center;
  margin-top: 100px;
`

export const MailingContent = styled.form`
  display: flex;
  justify-content: center;
  margin: 40px 0 80px 0;
`

export const MailingInput = styled.input`
  background-color: transparent;
  border: 1px solid ${navyBlue};
  width: 20%;
  min-width: 200px;
  margin-right: 24px;
  padding: 16px;
  &::placeholder {
    color: ${navyBlue};
  }
`
