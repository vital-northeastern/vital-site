import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 40px ${padding.tablet} 8px;
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 150px;
    align-items: center;
    margin-bottom: -20px;
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    margin: 0 auto;
    order: 2;
  }
  @media ${devices.laptop} {
    width: 45%;
    order: 1;
    padding-right: 35px;
  }
`

const H2Title = styled(H2)`
  margin-bottom: 0.9rem;
  @media ${devices.mobile} {
    margin-top: 1.4rem;
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    line-height: 40px;
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    margin: 0 auto;
    order: 1;
  }
  @media ${devices.laptop} {
    width: 55%;
    padding-left: 50px;
    order: 2;
  }
`

const ButtonContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${devices.laptop} {
    display: block;
  }
`

export { Container, TextContainer, H2Title, ImageContainer, ButtonContainer }
