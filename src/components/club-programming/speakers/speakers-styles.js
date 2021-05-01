import styled from "styled-components"
import { size, devices, padding } from "../../../constants/devices"
import { PCard } from "../../../constants/typography"
import { black } from "../../../constants/colors"

const Container = styled.div`
  @media ${devices.mobile} {
    padding: 0px ${padding.mobile} 0px;
    margin-bottom: 30px;
  }
  @media ${devices.tablet} {
    padding: 8px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 90px ${padding.laptop} 8px 290px;
    margin-bottom: -20px;
  }
  @media ${devices.desktop} {
    padding-left: 340px;
    padding-right: ${padding.desktop};
  }
`
const SpeakersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  ::after {
    content: "";
    flex: 0 0 30%;
  }
`

const SpeakerContainer = styled.div`
  @media ${devices.mobile} {
    width: 30.5%;
  }
  @media ${devices.tablet} {
    width: 18.5%;
  }
`

const PCaption = styled(PCard)`
  color: ${black};
  font-size: calc(
    10px + (13 - 10) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
  @media ${devices.mobile} {
    margin-top: 0.6rem;
    line-height: 15px;
  }
  @media ${devices.tablet} {
    margin-top: 0.4rem;
    line-height: 20px;
  }
  @media ${devices.desktop} {
    font-size: 14px;
  }
`

export { Container, SpeakersContainer, SpeakerContainer, PCaption }
