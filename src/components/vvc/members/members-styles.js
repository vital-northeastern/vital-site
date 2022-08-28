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
    padding: 90px ${padding.laptop} 8px;
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
    padding-right: ${padding.desktop};
  }
`
const MembersContainer = styled.div`
  margin-top: 3.5rem;
  padding-left: 6%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  ::after {
    content: "";
    flex: 0 0 30%;
  }
`

const MemberContainer = styled.div`
  z-index: 10;
  @media ${devices.mobile} {
    width: 30.5%;
  }
  @media ${devices.tablet} {
    width: 20.5%;
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
    line-height: 10px;
  }
  @media ${devices.desktop} {
    margin-top: 0.7rem;
  }
  @media (min-width: 1600px) {
    font-size: 14.5px;
  }
`

export { Container, MembersContainer, MemberContainer, PCaption }
