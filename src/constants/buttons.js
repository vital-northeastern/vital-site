import styled from "styled-components"
import { white, navyBlue } from "./colors"

const PrimaryButton = styled.button`
  background-color: ${navyBlue};
  color: ${white};
  border-radius: 50px;
  border: none;
  padding: 20px 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  &:hover {
    background-color: ${white};
    color: ${navyBlue};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`
export { PrimaryButton }
