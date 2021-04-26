import styled from "styled-components"
import { size } from "../../../constants/devices"
import { royalBlue } from "../../../constants/colors"
import { P } from "../../../constants/typography"

const CardPosition = styled.div`
  min-width: calc(50% - 30px);
  height: 200px;
  display: inline-flex;
  margin-bottom: ${props =>
    props.isLast && props.index % 2 === 0 ? "0" : "160px"};
  margin-left: ${props => (props.index % 2 === 0 ? "0" : "60px")};
  position: relative;

  @media only screen and (max-width: ${size.tablet}px) {
    display: flex;
    min-width: 100%;
    margin: 0;
    height: initial;
  }
`
const ContactCardContainer = styled.div`
  display: inline-flex;
  min-width: 100%;
  position: absolute;
  top: ${props => (props.index % 2 === 0 ? "0" : "180px")};
  @media only screen and (max-width: ${size.tablet}px) {
    position: initial;
    margin-bottom: 40px;
    flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  }
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

const OverlayText = styled(P)`
  padding: 10%;
  color: white;
  position: absolute;
  top: 0;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 4%;
  min-width: 50%;
`

export {
  ContactCardContainer,
  CardPosition,
  InfoContainer,
  Overlay,
  OverlayText,
}
