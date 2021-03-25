import styled from "styled-components"
// import background from "./gatsby-icon.png"
import hex from "../../images/blue_hex.svg"

const TeamContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding-bottom: 200px;
`

const TitleHolder = styled.div`
  position: relative;
`

const TeamTitle = styled.h2`
  color: #001049;
  text-align: ${props => (props.index % 2 === 0 ? "left" : "right")};
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const BackgroundHex = styled.div`
  background-image: url(${hex});
  background-size: 56%;
  background-position: ${props => (props.index % 2 === 0 ? "left" : "right")};
  height: 400px;
  width: 100%;
  position: absolute;

  top: ${props => (props.index % 2 === 0 ? "-50px" : "-140px")};
  left: ${props => (props.index % 2 === 0 ? "-140px" : "40px")};
  right: ${props => (props.index % 2 === 0 ? "0" : "-80px")};

  background-repeat: no-repeat;
  transform: ${props =>
    props.index % 2 === 0 ? "rotate(25deg)" : "rotate(0deg)"};
`

const TeamMembersContainer = styled.div``

export {
  TeamContainer,
  TeamTitle,
  TeamMembersContainer,
  BackgroundHex,
  TitleHolder,
}
