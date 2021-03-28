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
  text: `calc(8px + (20 - 10) * ((100vw - 375px) / (1920 - 375)))`,
}

const CardPosition = styled.div`
  min-width: calc(50% - 30px);
  height: 200px;
  display: inline-flex;
  margin-bottom: ${props =>
    props.isLast && props.index % 2 === 0 ? "0" : "160px"};
  margin-left: ${props => (props.index % 2 === 0 ? "0" : "60px")};

  position: relative;
`
const ContactCardContainer = styled.div`
  display: inline-flex;
  min-width: 100%;
  position: absolute;
  top: ${props => (props.index % 2 === 0 ? "0" : "180px")};
`

const MemberImg = styled.div`
  min-width: 45%;
  padding-top: 45%;

  background-image: url(${props => "https://" + props.photoUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const TextOverlay = styled.div`
  position: absolute;
  font-size: ${fontSizes.text};
  font-family: ${fonts.poppinsRegular};
  color: black;
  @media ${devices.mobile} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 10px;
  }
  @media ${devices.tablet} {
    padding: 1rem;
    line-height: 15px;
  }
  @media ${devices.desktop} {
    padding: 1rem;
    line-height: 20px;
  }
`

const PositionContainer = styled.div`
  word-wrap: break-word;
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
  flex-direction: column;
  justify-content: space-between;

  padding: 0 4%;
  min-width: 50%;
`

const MemberInfoSpacer = styled.div`
  min-height: 10%;
`

const MemberName = styled.h2`
  font-weight: 400;
  color: #001049;
  margin: 0;
`

const MemberPosition = styled.p`
  color: #001049;
  margin: 0;
`

const MemberMajor = styled.p`
  color: #001049;
  margin: 0;
`

const ConnectLink = styled.a`
  z-index: 2;
  display: inline-block;
  align-self: flex-start;
`

const ConnectButton = styled.button`
  background-color: #001049;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 6px 30px;
  &:hover {
    cursor: pointer;
  }
`

export {
  ContactCardContainer,
  CardPosition,
  MemberImg,
  TextOverlay,
  PositionContainer,
  Email,
  Text,
  EmailText,
  Overlay,
  InfoContainer,
  MemberName,
  MemberPosition,
  MemberMajor,
  ConnectButton,
  MemberInfoSpacer,
  ConnectLink,
}
