import styled from "styled-components"
import { white, navyBlue, royalBlue } from "./colors"
import "./typefaces.css"

const Button = styled.button`
  background-color: ${props => (props.primary ? navyBlue : "transparent")};
  color: ${props => (props.primary ? white : navyBlue)};
  border-radius: 50px;
  border: ${props => (props.primary ? "none" : `1px solid ${navyBlue}`)};
  padding: 20px 38px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Futura Book", sans-serif;
  font-size: 14px;
  transition: all 0.2s;
  &:hover {
    background-color: ${props => (props.primary ? royalBlue : "transparent")};
    border: ${props => (props.primary ? "none" : `1px solid ${royalBlue}`)};
    color: ${props => (props.primary ? white : royalBlue)};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

export { Button }
