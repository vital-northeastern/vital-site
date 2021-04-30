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
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 110px ${padding.laptop} 8px 150px;
    align-items: center;
    margin-bottom: -20px;
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
    order: 2;
    margin: 0 auto;
  }
  @media ${devices.laptop} {
    width: 50%;
    order: 1;
    padding-left: 75px;
    padding-right: 100px;
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

const ButtonContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${devices.laptop} {
    display: block;
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: 1;
    margin: 0 auto;
  }
  @media ${devices.laptop} {
    order: 2;
    width: 48%;
  }
`

export { Container, TextContainer, H2Title, ButtonContainer, ImageContainer }
