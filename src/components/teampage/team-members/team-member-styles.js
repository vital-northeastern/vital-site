import styled from "styled-components"
import { size } from "../../../constants/devices"

const CardPosition = styled.div`
  min-width: calc(50% - 30px);
  height: 300px;
  display: inline-flex;
  margin-bottom: ${props =>
    props.isLast && props.index % 2 === 0 ? "0" : "8%"};
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
  left: ${props => (props.position === "Executive Director" ? "25%" : 0)};
  @media only screen and (max-width: ${size.tablet}px) {
    position: initial;
    margin-bottom: 40px;
    flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  }
`

const GraidentSquare = styled.div`
  width: 50%;
  padding-top: 50%;
  position: absolute;
  top: 40px;
  background: linear-gradient(147.64deg, #c8dcee 19.39%, #546bdf 94.2%);
  @media only screen and (max-width: ${size.tablet}px) {
    display: none;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 4%;
  min-width: 50%;
`

export { ContactCardContainer, CardPosition, InfoContainer, GraidentSquare }
