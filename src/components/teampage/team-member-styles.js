import styled from "styled-components"
import Img from "gatsby-image"
import { devices } from "../../constants/devices"
import { royalBlue, navyBlue } from "../../constants/colors"

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

const Overlay = styled.div`
  width: 100%;

  padding-top: 100%;
  background-color: ${royalBlue};
  opacity: 0.8;
  z-index: 4;

  position: absolute;
  top: 0;

  overflow-y: auto;
  display: none;
`

const OverlayText = styled.p`
  padding: 10%;
  color: white;
  position: absolute;
  top: 0;
`

const MemberImg = styled.div`
  min-width: 45%;
  padding-top: 45%;

  background-image: url(${props => "https://" + props.photoUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  &:hover ${Overlay} {
    display: initial;
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

const MemberMajor = styled.p`
  color: ${navyBlue};
  margin: 0;
`

const ConnectLink = styled.a`
  z-index: 2;
  display: inline-block;
  align-self: flex-start;
  color: ${royalBlue};
`

export {
  ContactCardContainer,
  CardPosition,
  MemberImg,
  InfoContainer,
  MemberMajor,
  MemberInfoSpacer,
  ConnectLink,
  Overlay,
  OverlayText,
}
