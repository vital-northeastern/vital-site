import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { devices } from "../../../constants/devices"
import { white, royalBlue, navyBlue } from "../../../constants/colors"

const CardContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.tabletMax} {
    margin: 0 auto 50px auto;
  }
  @media ${devices.laptop} {
    width: 30vw;
    margin: 40px 7.5px 50px;
  }
  @media (min-width: 1100px) {
    margin: 40px 10px 50px;
  }
  display: flex;
  flex-direction: column;
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

const CardLink = styled.a`
  display: block;
  color: ${white};
  background-color: ${royalBlue};
  text-decoration: none;
  transition: all 0.2s;
  flex: 1;
  &:hover {
    background-color: ${navyBlue};
    cursor: pointer;
  }
`

const CardTitle = styled(H2)`
  text-align: center;
  padding-top: 24px;
  color: ${white};
  margin: 0 auto;
  @media ${devices.mobile} {
    padding-top: 15px;
    padding-bottom: 10px;
  }
  @media ${devices.tablet} {
    padding-top: 24px;
    padding-bottom: 0px;
  }
`

const CardTitleContainer = styled.div`
  padding: 10px 25px 0px 25px;
`

const TextContainer = styled.div`
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  @media ${devices.mobileMax} {
    padding-top: 0px;
    height: auto;
    padding-bottom: 20px;
  }
`

export {
  CardContainer,
  ImageContainer,
  CardLink,
  CardTitle,
  CardTitleContainer,
  TextContainer,
}
