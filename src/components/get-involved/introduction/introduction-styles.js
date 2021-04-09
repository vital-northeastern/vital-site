import styled from "styled-components"
import { size, devices } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 75px;
  @media (max-width: ${size.tablet}px) {
    display: block;
  }
`

const TextContainer = styled.div`
  width: 60%;
  color: ${darkGray};
  @media (max-width: ${size.tablet}px) {
    width: 100%;
  }
`

const Text = styled.div`
  padding-right: 100px;
`

const DisclaimerContainer = styled.div`
  width: 40%;
  padding-left: 75px;
  padding-right: 5px;
`

export { Container, TextContainer, Text, DisclaimerContainer }
