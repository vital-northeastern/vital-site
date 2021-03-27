import styled from "styled-components"
import { white, navyBlue, periwinkle } from "./colors"

const PrimaryButton = styled.button`
  background-color: ${navyBlue};
  color: ${white};
  border-radius: 50px;
  border: none;
  padding: 20px 38px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  transition: all 0.2s;
  &:hover {
    background-color: ${periwinkle};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

const SecondaryButton = styled.button`
  color: ${navyBlue};
  border-radius: 50px;
  border: 1px solid ${navyBlue};
  background: transparent;
  padding: 20px 38px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  transition: all 0.2s;
  &:hover {
    background-color: ${periwinkle};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

export { PrimaryButton, SecondaryButton }
