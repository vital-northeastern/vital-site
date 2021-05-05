import styled from "styled-components"
import { navyBlue, royalBlue } from "../../constants/colors"
import {
  H2,
  HName,
  fonts,
  fontSizes,
  fontWeights,
} from "../../constants/typography"
import { devices } from "../../constants/devices"

const carouselNavButtonSize = 15
const carouselNavButtonSideMargin = 4

export const CarouselTitleContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`

export const CarouselButtonsContainer = styled.div`
  position: relative;
`

export const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
`

export const NavButtons = styled.button`
  width: ${carouselNavButtonSize}px;
  height: ${carouselNavButtonSize}px;
  background-color: ${navyBlue};
  border: none;
  border-radius: 50%;
  margin: 0 ${carouselNavButtonSideMargin}px;
  z-index: 2;
`

export const CarouselControls = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
`

export const Control = styled.img`
  height: 100%;
  ${props => (props.direction === "left" ? "transform: rotate(180deg);" : "")}
  ${props =>
    props.direction === "left"
      ? `margin-right: ${
          props.numberOfItems *
            (carouselNavButtonSize + carouselNavButtonSideMargin * 2) +
          16
        }px;`
      : ""}
`
export const CarouselTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`
export const EventTitle = styled(HName)`
  margin-bottom: 0.5em;
`

export const MoreLink = styled.a`
  display: flex;
  font-size: ${fontSizes.p};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  line-height: 24px;
  color: ${navyBlue};
  text-decoration: none;
  white-space: nowrap;
  @media ${devices.mobileMax} {
    line-height: 22px;
  }
`

export const LongRightArrow = styled.img`
  margin-left: 16px;
  margin-top: 4px;
`
