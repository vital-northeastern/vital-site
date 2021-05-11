import styled from "styled-components"
import doubleHex from "../../../images/double3dHelix.svg"

const colors = {
  primary: "#001049", // dark blue
  secondary: "#607AE6", // light blue
}

const HeroContainer = styled.div`
  padding: 180px 0 200px 0;
  display: flex;
  justify-content: center;

  background-image: url("${doubleHex}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-position-y: -140px;
`

const InnerHeroContainer = styled.div``

const SmallTitle = styled.h2`
  color: ${colors.secondary};
  margin: 0;
`
const BigTitle = styled.h1`
  color: ${colors.primary};
  font-size: 200px;
  margin: 0;
  line-height: 1;
`

const SubHeading = styled.h3`
  margin: 0;
  width: 65%;
  margin-left: auto;
`

const ScrollCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;
  cursor: pointer;
`

const ScrollText = styled.p`
  color: ${colors.primary};
  margin-bottom: 8px;
`

export {
  HeroContainer,
  InnerHeroContainer,
  SmallTitle,
  BigTitle,
  SubHeading,
  ScrollCont,
  ScrollText,
}
