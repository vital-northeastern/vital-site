import styled from "styled-components"
import { size } from "../../../constants/devices"

const fontSizes = {
  title: `calc(
    16px + (20 - 16) *
      ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
}

const CTAContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  outline: 2px solid #546bdf;
  color: #546bdf;
  height: 50px;
  line-height: 50px;
  text-align: center;
`

const BackgroundContainer = styled.div`
  margin: auto;
  width: 35%;
  height: 60px;
  background-color: #546bdf;
  position: relative;
`

const CTAText = styled.h4`
  font-family: "Work Sans", sans-serif;
  font-size: ${fontSizes.title};
`

export { CTAContainer, BackgroundContainer, CTAText }
