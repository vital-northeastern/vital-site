import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices, padding } from "../../constants/devices"
import { H2, P } from "../../constants/typography"

const ErrorContainer = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 8rem ${padding.mobile} 0rem;
  }
  @media ${devices.tablet} {
    padding: 10rem 120px 0.2rem;
  }
  @media ${devices.laptop} {
    padding: 9rem 160px 1rem;
    display: flex;
    align-items: center;
  }
`

const TextContainer = styled.div`
  width: 50%;
  padding-right: 40px;
  @media ${devices.tabletMax} {
    width: 100%;
    padding-right: 0px;
    margin: 0 auto;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${devices.mobile} {
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
  }
  @media ${devices.tablet} {
    margin-top: 1rem;
  }
  @media ${devices.laptop} {
    width: 50%;
    margin-top: 0rem;
  }
`

const H2Header = styled(H2)`
  margin-bottom: 2rem;
  font-size: calc(
    35px + (50 - 35) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
`

const PMessage = styled(P)`
  font-size: calc(
    14px + (18 - 14) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
  line-height: 29px;
  @media ${devices.mobileMax} {
    line-height: 26px;
  }
`

const ErrorImage = styled(Img)`
  width: 55%;
`

export {
  ErrorContainer,
  TextContainer,
  ImageContainer,
  H2Header,
  PMessage,
  ErrorImage,
}
