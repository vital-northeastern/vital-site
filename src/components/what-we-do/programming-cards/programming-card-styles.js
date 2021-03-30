import styled from "styled-components"
import { HLower, P } from "../../../constants/typography"

const CardContainer = styled.div`
  width: 350px;
  overflow: hidden;
  padding: 50px 10px 50px;
`

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`

const CardContentContainer = styled.div`
  background-color: #5269e1;
  height: 300px;
`

const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
  color: white;
`

const CardTitle = styled(HLower)`
  text-transform: capitalize;
  text-align: center;
`

const CardTitleContainer = styled.div`
  padding-top: 10px;
`

export {
  CardContainer,
  ImageContainer,
  CardContentContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
}
