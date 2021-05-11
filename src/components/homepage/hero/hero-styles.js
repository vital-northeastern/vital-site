import styled from "styled-components"
import { navyBlue } from "../../../constants/colors"
import { devices } from "../../../constants/devices"
import { fontWeights, HName, PCard } from "../../../constants/typography"

const HeroContainer = styled.div`
  padding: 180px 0 200px 0;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${devices.tabletMax} {
    padding-top: 150px;
  }
  @media ${devices.mobileMax} {
    padding-top: 200px;
  }
`

const HeroHex = styled.img`
  position: absolute;
  z-index: -1;
  transform: ${props =>
    props.side === "left" ? "rotate(0deg)" : "rotate(110deg)"};
  ${props => (props.side === "left" ? "left: 0%; top: 15%;" : "")}
  ${props => (props.side === "left" ? "" : "right: -9%; top: 28%;")}
  @media ${devices.laptopMax} {
    max-width: 40%;
    ${props => (props.side === "left" ? " top: 24%;" : "")}
    ${props => (props.side === "left" ? "" : " top: 28%;")}
  }
  @media ${devices.tabletMax} {
    ${props => (props.side === "left" ? " top: 40%;" : "")}
    ${props => (props.side === "left" ? "" : " top: 48%;")}
  }
  @media ${devices.mobileMax} {
    max-width: 60%;

    ${props => (props.side === "left" ? " top: 60%;" : "")}
    ${props => (props.side === "left" ? "" : " top: 12%;")}
  }
`

const InnerHeroContainer = styled.div``

const SmallTitle = styled(HName)`
  font-weight: ${fontWeights.medium};
  margin: 0;
`
const BigTitle = styled.h1`
  color: ${navyBlue};
  font-size: 210px;
  margin: 0;
  line-height: 1;
  @media ${devices.mobileMax} {
    font-size: 5rem;
  }
`

const SubHeadingHolder = styled.div`
  width: fit-content;
  margin-left: auto;
  @media ${devices.mobileMax} {
    margin-left: 0;
  }
`

const SubHeading = styled(HName)`
  font-weight: ${fontWeights.medium};
  margin: 0;
  width: fit-content;
  line-height: 1.2;
`

const ScrollCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0 0 0;
  cursor: pointer;
  @media ${devices.mobileMax} {
    margin-top: 80px;
  }
`

const ScrollText = styled(PCard)`
  margin-bottom: 8px;
  font-weight: ${fontWeights.semiBold};
`

export {
  HeroContainer,
  HeroHex,
  InnerHeroContainer,
  SmallTitle,
  BigTitle,
  SubHeading,
  ScrollCont,
  ScrollText,
  SubHeadingHolder,
}
