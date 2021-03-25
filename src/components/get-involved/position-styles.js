import styled from "styled-components"
import Img from "gatsby-image"
import { devices } from "../../constants/devices"

const fonts = {
  manrope: `'Manrope Extra Bold', 'Manrope', 'Arial',
    Arial, sans-serif`,
  workSans: `'Work Sans', sans-serif`,
}

const fontSizes = {
  name: `calc(12px + (38 - 16) * ((100vw - 375px) / (1920 - 375)))`,
  text: `calc(9px + (20 - 12) * ((100vw - 375px) / (1920 - 375)))`,
}

const ContactCardContainer = styled.div`
  margin-left: 100px;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  @media ${devices.mobile} {
    height: 23rem;
    width: 30rem;
  }
  @media ${devices.tablet} {
    height: 16rem;
    width: 26rem;
  }
  @media ${devices.desktop} {
    height: 20rem;
    width: 25rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  float: left;
  width: 30%;
`

const MemberImg = styled(Img)`
  display: inline-block;
  width: 100%;
  height: auto;
  box-shadow: 3px 3px 12px grey;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  float: left;
  padding-left: 20px;
  width: 70%;
  @media ${devices.mobile} {
    justify-content: normal;
  }
`

const TextContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding-bottom: 0px;
`

const MemberName = styled.h2`
  font-family: ${fonts.manrope};
  font-size: ${fontSizes.name};
  color: black;
  margin: auto;
  padding-top: 1rem;
`

const MemberPosition = styled.p`
  font-family: ${fonts.workSans};
  font-size: ${fontSizes.text};
  line-height: 20px;
  color: black;
  margin: auto;
`

export {
  ContactCardContainer,
  FlexContainer,
  MemberImg,
  InfoContainer,
  TextContainer,
  MemberName,
  MemberPosition,
}
