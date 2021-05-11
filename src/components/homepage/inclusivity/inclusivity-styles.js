import styled from "styled-components"
import { devices } from "../../../constants/devices"
import { navyBlue, royalBlue } from "../../../constants/colors"
import { HUpper } from "../../../constants/typography"

const IncContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 200px;
  @media ${devices.mobileMax} {
    flex-direction: column;
  }
`
const HexShape = styled.img`
  position: absolute;
  z-index: -1;
  transform: scale(0.9, 0.9) rotate(0deg);
  left: -40px;
  top: -730px;
  @media only screen and ${devices.mobileMax} {
    display: none;
  }
`

const InfoContainer = styled.div`
  width: 50%;
  padding: 0 10% 0 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${devices.mobileMax} {
    width: 100%;
  }
`

const ImageSection = styled.div`
  width: 50%;
  background: linear-gradient(
      81.34deg,
      rgba(255, 255, 255, 0.2) 23.63%,
      rgba(255, 255, 255, 0) 63.08%
    ),
    linear-gradient(36.48deg, #a8d2ff 24.89%, #5269e1 111.91%);
  padding-top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const ImageHeader = styled(HUpper)`
  position: absolute;
  top: 8%;
  padding: 15px;
  width: 70%;
  text-align: center;
  background-color: white;
  z-index: 1;
  @media ${devices.tablet} {
    width: 90%;
  }
  @media ${devices.laptop} {
    width: 80%;
  }
`

const Selectors = styled.div`
  width: 100px;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8%;
`

const Selector = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid ${navyBlue};
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props =>
    props.index === props.currentDisplayedIndex ? navyBlue : "transparent"};
`

const RotatingImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 75%;
  padding-top: 56.25%; // 4:3 aspect ratio
  z-index: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
`

export {
  IncContainer,
  HexShape,
  InfoContainer,
  ImageSection,
  Selectors,
  ImageHeader,
  RotatingImage,
  Selector,
}
