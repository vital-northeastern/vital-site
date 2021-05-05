import styled from "styled-components"
import { size, devices } from "../../../constants/devices"
import { H2, PCard } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 10px 0px;
  }
  @media ${devices.laptop} {
    display: flex;
  }
`

const TextContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 60%;
  }
`

const Text = styled.div`
  @media ${devices.laptop} {
    padding-right: 100px;
  }
`

const H2Header = styled(H2)`
  @media ${devices.mobile} {
    line-height: 33px;
    margin-bottom: 1rem;
  }
  @media ${devices.tablet} {
    line-height: 30px;
  }
`

const DisclaimerContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 40%;
    padding-left: 7%;
  }
`

const PDisclaimer = styled(PCard)`
  font-size: calc(
    12px + (14 - 12) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
`

export {
  Container,
  TextContainer,
  Text,
  H2Header,
  DisclaimerContainer,
  PDisclaimer,
}
