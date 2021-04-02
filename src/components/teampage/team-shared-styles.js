import styled from "styled-components"
import { devices } from "../../constants/devices"
import { royalBlue, navyBlue } from "../../constants/colors"
import { fontSizes, fontWeights } from "../../constants/typography"

const MemberName = styled.h2`
  font-weight: 500;
  color: ${navyBlue};
  font-size: ${fontSizes.h2}
  margin: 0;
`

const MemberPosition = styled.p`
  color: ${navyBlue};
  margin: 0;
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

export { MemberName, MemberPosition, Overlay, OverlayText, MemberImg }
