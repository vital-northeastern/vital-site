import styled from "styled-components"
import { size, devices, padding } from "../../../constants/devices"
import { PCard } from "../../../constants/typography"
import { black } from "../../../constants/colors"

const Container = styled.div`
  @media ${devices.mobile} {
    padding: 0px ${padding.mobile} 8px;
    margin-bottom: 50px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 290px;
    margin-bottom: -20px;
  }
`
const SpeakersContainer = styled.div`
  @media ${devices.tablet} {
    display: flex;
    justify-content: space-between;
  }
`

const SpeakerContainer = styled.div`
  @media ${devices.mobile} {
    width: 30%;
    padding-right: 10px;
    display: inline-block;
    vertical-align: top;
  }
  @media ${devices.tablet} {
    width: 18.5%;
    padding-right: 0px;
  }
`

const PCaption = styled(PCard)`
  color: ${black};
  margin-top: 0.4rem;
  font-size: calc(
    10px + (13 - 10) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
  line-height: 20px;
`

export { Container, SpeakersContainer, SpeakerContainer, PCaption }
