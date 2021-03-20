import styled from "styled-components"
import Img from "gatsby-image"
import { devices } from "../../constants/devices"

const fonts = {
  manrope: `'Manrope Extra Bold', 'Manrope', 'Arial',
    Arial, sans-serif`,
  poppinsRegular: `'Poppins Regular', sans-serif`,
  poppinsBold: `'Poppins Bold', sans-serif`,
}

const fontSizes = {
  name: `calc(16px + (38 - 16) * ((100vw - 375px) / (1920 - 375)))`,
  position: `calc(12px + (20 - 12) * ((100vw - 375px) / (1920 - 375)))`,
  text: `calc(10px + (20 - 10) * ((100vw - 375px) / (1920 - 375)))`,
}

const ContactCardContainer = styled.div`
  margin-right: 50px;
  z-index: 1;
  display: inline-block;
  @media ${devices.mobile} {
    height: 23rem;
    width: 30rem;
  }
  @media ${devices.tablet} {
    height: 30rem;
    width: 20rem;
  }
  @media ${devices.desktop} {
    height: 30rem;
    width: 20rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  width: auto;
`

const MemberImg = styled(Img)`
  display: inline-block;
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 12px grey;
`

const TextOverlay = styled.div`
  position: absolute;
  font-size: ${fontSizes.text};
  font-family: ${fonts.poppinsRegular};
  color: black;
  @media ${devices.mobile} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 15px;
  }
  @media ${devices.tablet} {
    padding: 3rem;
    line-height: 20px;
  }
  @media ${devices.desktop} {
    padding: 3rem;
    line-height: 25px;
  }
`

const PositionContainer = styled.div`
  @media ${devices.mobile} {
    padding-bottom: 1rem;
  }
  @media ${devices.tablet} {
    padding-bottom: 2rem;
  }
  @media ${devices.desktop} {
    padding-bottom: 2rem;
  }
`

const EmailText = styled.div`
  font-family: ${fonts.poppinsBold};
  @media ${devices.mobile} {
    padding-top: 1rem;
  }
  @media ${devices.tablet} {
    padding-top: 2rem;
  }
  @media ${devices.desktop} {
    padding-top: 2rem;
  }
`

const Text = styled.p`
  display: inline;
`

const Email = styled.a`
  text-decoration: none;
  color: block;
  &:hover {
    color: blue;
    transition: 200ms;
  }
`

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 5px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.7);
  }
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media ${devices.mobile} {
    justify-content: normal;
  }
  @media ${devices.desktop} {
    width: auto;
    height: auto;
  }
`

const LeftContainer = styled.div`
  position: absolute;
  max-width: 70%;
`

const MemberName = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.name};
  color: black;
  margin: auto;
  padding-top: 1rem;
`

const MemberPosition = styled.p`
  font-family: ${fonts.poppins};
  font-size: ${fontSizes.position};
  color: black;
  margin: auto;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  right: 0;
  padding-top: 1rem;
  position: absolute;
`

export {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  TextOverlay,
  PositionContainer,
  Email,
  Text,
  EmailText,
  Overlay,
  InfoContainer,
  LeftContainer,
  MemberName,
  MemberPosition,
  RightContainer,
}
