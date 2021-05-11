import styled from "styled-components"
import { navyBlue } from "../../../constants/colors"
import { fontWeights, HName, PCard } from "../../../constants/typography"

const HeroContainer = styled.div`
  padding: 180px 0 200px 0;
  display: flex;
  justify-content: center;
  position: relative;
`

const HeroHex = styled.img`
  position: absolute;
  z-index: -1;
  transform: scale(1, 1)
    ${props => (props.side === "left" ? "rotate(0deg)" : "rotate(110deg)")};
  ${props => (props.side === "left" ? "left: 0%; top: 20%;" : "")}
  ${props => (props.side === "left" ? "" : "right: -9%; top: 28%;")}
`

const InnerHeroContainer = styled.div`
  position: relative;
`

const SmallTitle = styled(HName)`
  font-weight: ${fontWeights.medium};
  margin: 0;
`
const BigTitle = styled.h1`
  color: ${navyBlue};
  font-size: 200px;
  margin: 0;
  line-height: 1;
`

const SubHeadingHolder = styled.div`
  width: fit-content;
  margin-left: auto;
`

const SubHeading = styled.h3`
  font-weight: ${fontWeights.medium};
  margin: 0;
  width: fit-content;
`

const ScrollCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0 0 0;
  cursor: pointer;
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
