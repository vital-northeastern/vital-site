import styled from "styled-components"
import { white, darkBlue } from "./colors"

const PrimaryButton = styled.button`
  text-transform: uppercase;
  background-color: ${darkBlue};
  color: ${white};
  border-radius: 50px;
  padding: 10px 45px;
  transition: all 0.2s;
  letter-spacing: 1px;
  font-size: 14px;
  &:hover {
    background-color: ${white};
    color: ${darkBlue};
    border: 2px solid ${darkBlue};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`
export { PrimaryButton }
