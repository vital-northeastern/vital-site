import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 30px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
    display: flex;
    margin-bottom: -20px;
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 21%;
  }
  @media ${devices.desktop} {
    padding-left: 22%;
    padding-right: ${padding.desktop};
  }
`

const Event = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    padding-top: ${props => (props.index === 0 ? "0px" : "40px")};
  }
  @media ${devices.tablet} {
    width: 50%;
    padding-top: 0px;
    padding-right: ${props => (props.index === 0 ? "17px" : "0px")};
    padding-left: ${props => (props.index === 0 ? "0px" : "17px")};
  }
  @media ${devices.laptop} {
    padding-right: ${props => (props.index === 0 ? "25px" : "0px")};
    padding-left: ${props => (props.index === 0 ? "0px" : "25px")};
  }
  color: ${navyBlue};
`

const H2EventType = styled(H2)`
  @media ${devices.mobile} {
    text-align: center;
    margin-bottom: 1.1rem;
  }
  @media ${devices.tablet} {
    text-align: left;
    margin-bottom: 1.45rem;
  }
`

const H2EventTitle = styled(H2)`
  @media ${devices.mobile} {
    margin-top: 1.25rem;
    margin-bottom: 0.8rem;
  }
  @media ${devices.laptop} {
    margin-top: ${props => (props.index % 2 === 0 ? "3rem" : "1.3rem")};
    margin-bottom: 0.9rem;
    line-height: 38px;
  }
`

const ButtonContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${devices.tablet} {
    display: block;
  }
`

export { Container, Event, H2EventType, H2EventTitle, ButtonContainer }
