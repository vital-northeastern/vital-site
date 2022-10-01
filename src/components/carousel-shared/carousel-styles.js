import styled from "styled-components"
import { lightGradient, navyBlue, royalBlue } from "../../constants/colors"
import {
  HName,
  fonts,
  fontSizes,
  fontWeights,
  H2,
} from "../../constants/typography"
import { devices } from "../../constants/devices"

const carouselNavButtonSize = 15
const carouselNavButtonSideMargin = 4

export const CarouselTitleContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`

export const CarItemHolder = styled.div`
  padding: 0 50px;
  @media ${devices.mobileMax} {
    padding: 0 20px;
  }
`

export const CarItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: ${lightGradient};
  padding: 2em;
`

export const CarouselButtonsContainer = styled.div`
  position: relative;
  margin-top: 16px;
  @media ${devices.mobileMax} {
    display: none;
  }
`

export const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
`

export const NavButtons = styled.button`
  width: ${carouselNavButtonSize}px;
  height: ${carouselNavButtonSize}px;
  background-color: ${props =>
    props.active && !props.primary
      ? royalBlue
      : props.active && props.primary
      ? navyBlue
      : !props.active && props.primary
      ? "transparent"
      : navyBlue};
  border: 1px solid
    ${props => (!props.primary && props.active ? royalBlue : navyBlue)};
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0 ${carouselNavButtonSideMargin}px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
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

export const CarImageContainer = styled.div`
  padding-right: 0.8rem;

  @media ${devices.laptop} {
    width: 40%;
  }
`

export const CarTextContainer = styled.div`
  padding-left: 0.8rem;

  @media ${devices.laptop} {
    width: 60%;
  }
`

export const CarouselTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media ${devices.mobileMax} {
    flex-direction: column;
  }
`
export const EventTitle = styled(HName)`
  margin-bottom: 0.5em;
`

export const MoreLink = styled.a`
  display: flex;
  flex-shrink: 0;
  align-self: flex-start;
  margin-left: 36px;
  font-size: ${fontSizes.p};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  line-height: 24px;
  color: ${navyBlue};
  text-decoration: none;
  white-space: nowrap;
  @media ${devices.mobileMax} {
    line-height: 22px;
    margin-left: 0;
  }
`

export const LongRightArrow = styled.img`
  margin-left: 16px;
  margin-top: 4px;
`

export const CarouselImage = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  background-image: url("${props => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`
export const PlaceholderBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaceholderText = styled(H2)`
  color: white;
  padding: 10%;
  background-color: ${navyBlue};
  max-width: 76%;
  text-align: center;
  margin: 0;
  @media ${devices.mobileMax} {
    font-size: 16px;
    line-height: 22px;
    padding: 8%;
  }
`

export const CarouselBig = styled.div`
  @media ${devices.tabletMax} {
    display: none;
  }
`

export const CarouselSmall = styled.div`
  display: none;
  @media ${devices.tabletMax} {
    display: initial;
  }
`
