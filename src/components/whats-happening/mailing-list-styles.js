import styled from "styled-components"
import { navyBlue } from "../../constants/colors"
import { devices } from "../../constants/devices"

export const MailingTitleHolder = styled.div`
  text-align: center;
  margin-top: 100px;
`

export const MailingContent = styled.form`
  display: flex;
  justify-content: center;
  margin: 40px 0 80px 0;
  @media ${devices.mobileMax} {
    flex-direction: column;
    align-items: flex-end;
    width: 90%;
    margin: 30px auto 80px auto;
  }
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
  @media ${devices.mobileMax} {
    width: 100%;
    margin: 0 0 16px 0;
  }
`
