import styled from "styled-components"
import { HLower, P } from "../../../constants/typography"
import { size, devices } from "../../../constants/devices"

const fontSizes = {
  title: `calc(
    25px + (30 - 25) *
      ((100vw - ${size.mobile}px) / (${size.desktop} - ${size.mobile})))`,
}

const CardContainer = styled.div`
  width: 385px;
  overflow: hidden;
  padding: 50px 10px 50px;
`

const ImageContainer = styled.div`
  height: auto;
  overflow: hidden;
`

const CardContentContainer = styled.div`
  background-color: #5269e1;
  height: 330px;
`

const CardContent = styled.div`
  color: white;
`

const CardTitle = styled(HLower)`
  text-transform: capitalize;
  text-align: center;
  padding-top: 30px;
  font-size: ${fontSizes.title};
  font-weight: 300px;
`

const CardTitleContainer = styled.div`
  padding-top: 10px;
`

const TextContainer = styled.div`
  margin: auto;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
`

export {
  CardContainer,
  ImageContainer,
  CardContentContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  TextContainer,
}
