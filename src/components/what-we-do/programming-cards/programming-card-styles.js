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
    margin: 0 auto 20px auto;
  }
  @media ${devices.laptop} {
    width: 28.5vw;
    margin: 50px 10px 50px;
  }
  background-color: ${royalBlue};
  overflow: hidden;
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    height: 50%;
  }
  @media ${devices.laptop} {
    height: auto;
  }
  overflow: hidden;
`

const CardContent = styled.div`
  color: ${white};
`

const CardTitle = styled(H2)`
  text-align: center;
  padding-top: 24px;
  color: ${white};
  margin: 0 auto;
  @media ${devices.mobileMax} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const CardTitleContainer = styled.div`
  padding: 10px 25px 0px 25px;
`

const TextContainer = styled.div`
  padding: 20px 30px 5px 30px;
  @media ${devices.mobileMax} {
    padding-top: 5px;
    height: auto;
    padding-bottom: 20px;
  }
`

export {
  CardContainer,
  ImageContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  TextContainer,
}
