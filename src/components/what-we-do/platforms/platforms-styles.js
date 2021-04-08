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
  @media ${devices.mobile} {
    padding-left: 30px;
  }
  @media ${devices.tablet} {
    padding-left: 75px;
  }
`

const Platform = styled.div`
  display: flex;
  @media ${devices.mobile} {
    width: 100vw;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "50vw" : "78vw")};
  }
  padding-top: ${props => (props.num === 0 ? "0px" : "24px")};
`

const PlatformContent = styled.div`
  @media ${devices.mobile} {
    width: 75%;
    padding-right: 20px;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "60%" : "35%")};
    padding-right: 0px;
  }
`

const LineContainer = styled.div`
  @media ${devices.mobile} {
    width: 25%;
    padding-right: 18px;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "40%" : "65%")};
    padding-right: ${props => (props.num === 0 ? "18px" : "0px")};
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
  position: relative;
  width: 100%;
  z-index: -10;
  @media ${devices.tabletMax} {
    display: none;
  }
`

const Image = styled.img`
  position: absolute;
  left: 67%;
  width: 60vw;
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
  Image,
}
