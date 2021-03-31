import styled from "styled-components"
import { HCapitalize } from "../../../constants/typography"

const CardContainer = styled.div`
  width: 405px;
  overflow: hidden;
  padding: 50px 10px 50px;
`

const ImageContainer = styled.div`
  height: auto;
  overflow: hidden;
`

const CardContentContainer = styled.div`
  background-color: #5269e1;
  height: 390px;
`

const CardContent = styled.div`
  color: white;
`

const CardTitle = styled(HCapitalize)`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 25px;
`

const CardTitleContainer = styled.div`
  padding-top: 10px;
`

const TextContainer = styled.div`
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 250px;
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
