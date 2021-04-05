import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { size } from "../../../constants/devices"
import { royalBlue } from "../../../constants/colors"
import { devices } from "../../../constants/devices"

const PlatformsContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
  positon: relative;
  width: auto;
  height: auto;
`

const Title = styled.div`
  padding-left: 75px;
`

const Platform = styled.div`
  display: flex;
  @media ${devices.mobile} {
    width: 100vw;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 1 ? "50vw" : "78vw")};
  }
  padding-top: ${props => (props.num === 1 ? "0px" : "22px")};
`

const PlatformContent = styled.div`
  @media ${devices.mobile} {
    width: 75%;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 1 ? "60%" : "35%")};
  }
`

const LineContainer = styled.div`
  @media ${devices.mobile} {
    width: 25%;
    padding-right: 18px;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 1 ? "40%" : "65%")};
    padding-right: ${props => (props.num === 1 ? "18px" : "0px")};
  }
  display: flex;
`

const Line = styled.span`
  height: 2px;
  margin-top: 18px;
  background: ${royalBlue};
  width: 95%;
`

const Dot = styled.span`
  height: 13px;
  width: 13px;
  margin-top: 13px;
  background-color: ${royalBlue};
  border-radius: 50%;
`

const PlatformTitle = styled(H2)`
  font-size: calc(
    16px + (26 - 16) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
`

const PlatformButton = styled(Button)`
  font-size: 12px;
  padding: 16px 48px;
`

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
`

export {
  PlatformsContainer,
  Title,
  Platform,
  LineContainer,
  PlatformContent,
  Line,
  Dot,
  PlatformTitle,
  PlatformButton,
  ImageContainer,
}
