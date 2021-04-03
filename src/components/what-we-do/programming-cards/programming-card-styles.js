import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { devices } from "../../../constants/devices"
import { white, royalBlue } from "../../../constants/colors"

const CardContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.tabletMax} {
    margin: 0 auto;
  }
  @media ${devices.laptop} {
    width: 30vw;
  }
  overflow: hidden;
  padding: 50px 10px 50px;
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    height: 50%;
  }
  @media (min-width: 1000px) {
    height: auto;
  }
  overflow: hidden;
`

const CardContentContainer = styled.div`
  background-color: ${royalBlue};
  @media ${devices.tablet} {
    height: 330px;
  }
  @media ${devices.laptop} {
    height: 450px;
  }
  @media (min-width: 1220px) {
    height: 390px;
  }
`

const CardContent = styled.div`
  color: ${white};
`

const CardTitle = styled(H2)`
  text-align: center;
  padding-top: 30px;
  color: ${white};
  @media ${devices.tablet} {
    padding-bottom: 15px;
  }
  @media ${devices.laptop} {
    padding-bottom: 25px;
  }
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

  @media ${devices.tablet} {
    height: 250px;
  }
  @media ${devices.laptop} {
    height: 320px;
  }
  @media (min-width: 1220px) {
    height: 250px;
  }
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
