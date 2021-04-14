import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { size } from "../../../constants/devices"
import { royalBlue, shadowGray } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"

const PlatformsContainer = styled.div`
  @media ${devices.mobile} {
    padding-top: 30px;
  }
  @media ${devices.tablet} {
    padding-top: 14px;
  }
  width: auto;
  height: auto;
`

const Title = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
  }
  @media ${devices.mobile} {
    padding-left: ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.laptop};
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
    width: 80%;
    padding-right: ${padding.mobile};
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "60%" : "35%")};
    padding-right: 0px;
  }
`

const LineContainer = styled.div`
  @media ${devices.mobile} {
    width: 20%;
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
  @media ${devices.mobile} {
    height: 11px;
    width: 11px;
    margin-top: 14px;
  }
  @media ${devices.tablet} {
    height: 13px;
    width: 13px;
    margin-top: 13px;
  }
  background-color: ${royalBlue};
  border-radius: 50%;
`

const PlatformTitle = styled(H2)`
  font-size: calc(
    16px + (26 - 16) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
  @media ${devices.mobile} {
    margin-bottom: 10px;
  }
  @media ${devices.tablet} {
    margin-bottom: 20px;
  }
`

const PlatformButton = styled(Button)`
  font-size: 12px;
  @media ${devices.desktop} {
    font-size: 13px;
  }
  padding: 19px 52px;
  box-shadow: 1.5px 1.5px 2px ${shadowGray};
`

const ImageContainer = styled.div`
  z-index: -10;
  @media ${devices.tabletMax} {
    display: none;
  }
`

const Image = styled.img`
  position: absolute;
  margin-top: -1.7rem;
  left: 63%;
  width: 67vw;
  @media (max-width: 1220px) {
    margin-top: 1.2rem;
  }
  @media (max-width: 1100px) {
    width: 60vw;
    margin-top: 150px;
  }
  height: auto;
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
