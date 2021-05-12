import styled from "styled-components"
import { navyBlue } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"
import { fonts, fontWeights, HName, PCard } from "../../../constants/typography"

const HeroContainer = styled.div`
  padding: 180px 0;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  @media ${devices.tabletMax} {
    padding-top: 150px;
  }
  @media ${devices.mobileMax} {
    padding-top: 200px;
    justify-content: flex-start;
    padding-left: ${padding.mobile};
    padding-right: ${padding.mobile};
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

const InnerHeroContainer = styled.div`
  align-self: center;
  @media ${devices.mobileMax} {
    align-self: flex-start;
  }
`

const SmallTitle = styled(HName)`
  font-weight: ${fontWeights.medium};
  margin: 0;
`
const BigTitle = styled.h1`
  color: ${navyBlue};
  font-family: ${fonts.nav};
  letter-spacing: 5px;
  font-size: 210px;
  margin: 0;
  line-height: 1;
  @media ${devices.mobileMax} {
    letter-spacing: 2.8px;
    font-size: 5rem;
  }
  @media (min-width: 1700px) {
    font-size: 250px;
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
  letter-spacing: 0px;
  line-height: 1.3;
`

const ScrollCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 130px 0 0 0;
  cursor: pointer;
  @media ${devices.mobileMax} {
    margin-top: 55px;
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
