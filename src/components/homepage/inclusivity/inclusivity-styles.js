import styled from "styled-components"
import { devices } from "../../../constants/devices"
import { royalBlue } from "../../../constants/colors"
import { Button } from "../../../constants/buttons"

const colors = {
  primary: "#001049", // dark blue
  secondary: "#607AE6", // light blue
}

const IncContainer = styled.div`
  display: flex;
  margin-bottom: 200px;
  @media ${devices.mobileMax} {
    flex-direction: column;
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
  padding: 60px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${devices.tablet} {
    height: 500px;
  }
  @media ${devices.laptop} {
    height: 600px;
  }
  @media ${devices.desktop} {
    height: 700px;
  }
`

const ImageHeader = styled.h2`
  text-transform: uppercase;
  color: ${colors.primary};
  padding: 15px;
  width: 60%;
  text-align: center;
  background-color: white;
  z-index: 1;
`

const Selectors = styled.div`
  width: 100px;
  height: 40px;
  z-index: 1;
  display: flex;
  justify-content: center;
`

const Selector = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid white;
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props =>
    props.index === props.currentDisplayedIndex ? "white" : "transparent"};
`

const RotatingImage = styled.div`
  width: 75%;
  z-index: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -40px;
`

export {
  IncContainer,
  InfoContainer,
  ImageSection,
  Selectors,
  ImageHeader,
  RotatingImage,
  Selector,
}
