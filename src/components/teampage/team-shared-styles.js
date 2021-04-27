import styled from "styled-components"
import { royalBlue, navyBlue } from "../../constants/colors"
import {
  fontWeights,
  HName,
  P,
  PCard,
  Connect,
} from "../../constants/typography"

const MemberName = styled(HName)`
  margin-bottom: 0;
`

const MemberPosition = styled(P)`
  color: ${navyBlue};
  margin: 0;
  font-weight: ${fontWeights.medium};
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

const OverlayText = styled(PCard)`
  padding: 10%;
  color: white;
  position: absolute;
  top: 0;
`

const MemberImg = styled.div`
  min-width: 50%;
  padding-top: 50%;

  background-image: url(${props => "https://" + props.photoUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative;
  &:hover ${Overlay} {
    display: initial;
  }
`

const ConnectLink = styled(Connect)`
  z-index: 2;
  display: inline-block;
  align-self: flex-start;
  color: ${royalBlue};
  margin-top: 12px;
`

const MemberInfo = styled(PCard)`
  margin: 0;
`

export {
  MemberName,
  MemberPosition,
  Overlay,
  OverlayText,
  MemberImg,
  ConnectLink,
  MemberInfo,
}
