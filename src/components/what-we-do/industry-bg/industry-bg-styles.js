import styled from "styled-components"
import { devices } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"

const Container = styled.div`
  justify-content: center;
  @media ${devices.mobile} {
    display: block;
    padding: 8px 30px;
    margin-bottom: 20px;
  }
  @media ${devices.laptop} {
    padding: 8px 80px;
    display: flex;
    margin-bottom: -15px;
  }
`

const TextContainer = styled.div`
  width: 45%;
  color: ${darkGray};
  @media ${devices.tabletMax} {
    width: 100%;
    margin: 0 auto;
  }
`

const Text = styled.div`
  @media ${devices.laptop} {
    padding-right: 50px;
    position: relative;
    top: 50%;
    transform: translateY(-60%);
  }
`

const Image = styled.img`
  height: 100%;
  width: 55%;
  @media ${devices.tabletMax} {
    margin: 0 auto;
    width: 100%;
  }
`

export { Container, TextContainer, Text, Image }
