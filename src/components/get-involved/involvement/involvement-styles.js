import styled from "styled-components"
import { size, devices, padding } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"
import { H2, PCard } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 10px ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding: 10px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 10px ${padding.laptop};
    display: flex;
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

const H2Header = styled(H2)`
  margin-bottom: 0.7rem;
`

const DisclaimerContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 40%;
    padding-left: 75px;
    padding-right: 10px;
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
