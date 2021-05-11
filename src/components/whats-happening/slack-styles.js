import styled from "styled-components"
import { devices } from "../../constants/devices"
import { navyBlue } from "../../constants/colors"

export const SlackContainer = styled.div`
  width: 75%;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(36.48deg, #a8d2ff 24.89%, #5269e1 111.91%);
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  padding: 8%;
  box-sizing: border-box;
  @media ${devices.mobileMax} {
    width: 88%;
  }
`

export const SlackImgHolder = styled.div`
  width: 20%;
`

export const SlackImg = styled.img`
  margin-bottom: 0;
`

export const SlackContent = styled.div`
  color: ${navyBlue};
  width: 55%;
  margin-left: 16px;
  @media only screen and ${devices.tabletMax} {
    width: 65%;
  }
`
