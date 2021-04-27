import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { size } from "../../../constants/devices"
import { royalBlue, shadowGray } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"

const PlatformsContainer = styled.div`
  @media ${devices.mobile} {
    padding-top: 30px;
    margin-bottom: 2rem;
  }
  @media ${devices.tablet} {
    padding-top: 14px;
    margin-bottom: 8rem;
  }
  @media ${devices.desktop} {
    margin-bottom: 10rem;
  }
  width: auto;
  height: auto;
`

const Title = styled.div`
  @media ${devices.mobile} {
    padding-left: ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding-left: ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.laptop};
  }
  @media ${devices.laptop} {
    padding-left: ${padding.desktop};
  }
`

const Platform = styled.div`
  display: flex;
  @media ${devices.mobile} {
    width: 100vw;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "48vw" : "76vw")};
  }
  padding-top: ${props => (props.num === 0 ? "10px" : "24px")};
`

const PlatformContent = styled.div`
  @media ${devices.mobile} {
    width: 80%;
    padding-right: ${padding.mobile};
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "59%" : "35%")};
    padding-right: 0px;
  }
`

const LineContainer = styled.div`
  @media ${devices.mobile} {
    width: 20%;
    padding-right: 18px;
  }
  @media ${devices.tablet} {
    width: ${props => (props.num === 0 ? "41%" : "65%")};
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
    width: 12px;
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
    font-size: 14px;
  }
  padding: 17px 55px;
  box-shadow: 1.5px 1.5px 2px ${shadowGray};
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
}
