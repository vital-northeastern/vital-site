import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { navyBlue } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
    display: flex;
    margin-bottom: -20px;
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 290px;
  }
`

const Event = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 50%;
    padding-right: ${props => (props.index === 0 ? "25px" : "0px")};
    padding-left: ${props => (props.index === 0 ? "0px" : "25px")};
  }
  color: ${navyBlue};
`

const H2Event = styled(H2)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

export { Container, Event, H2Event }
