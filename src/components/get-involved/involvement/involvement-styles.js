import styled from "styled-components"
import { size, devices } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"
import { PCard } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 10px 30px;
  }
  @media ${devices.tablet} {
    padding: 10px 40px;
  }
  @media ${devices.laptop} {
    padding: 10px 75px;
    display: flex;
    justify-content: center;
  }
`

const TextContainer = styled.div`
  width: 60%;
  color: ${darkGray};
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

const DisclaimerContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 40%;
    padding-left: 75px;
    padding-right: 5px;
  }
`

const PDisclaimer = styled(PCard)`
  font-size: calc(
    12px + (14 - 12) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
`

export { Container, TextContainer, Text, DisclaimerContainer, PDisclaimer }
