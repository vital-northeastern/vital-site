import styled from "styled-components"
import { white, navyBlue, royalBlue, shadowGray } from "./colors"
import { fonts } from "./typography"
import { devices } from "./devices"

const Button = styled.button`
  background-color: ${props => (props.primary ? navyBlue : "transparent")};
  color: ${props => (props.primary ? white : navyBlue)};
  border-radius: 50px;
  border: ${props => (props.primary ? "none" : `1px solid ${navyBlue}`)};
  padding: ${props => (props.padding ? props.padding : "20px 38px")};
  box-shadow: ${props =>
    props.boxshadow ? `1.5px 1.5px 2.5px ${shadowGray}` : ""};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${fonts.button};
  font-size: 13px;
  font-weight: 400;
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
  @media ${devices.desktop} {
    font-size: 14px;
  }
`

export { Button }
