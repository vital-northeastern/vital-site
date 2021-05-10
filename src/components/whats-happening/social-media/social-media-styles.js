import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { imageGradient } from "../../../constants/colors"

const SocialMediaContainer = styled.div`
  background: ${imageGradient};
  margin: 50px 0px;
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px ${padding.mobile};
    margin-bottom: 50px;
  }
  @media (max-width: 374px) {
    padding: 10px 0px;
  }
  @media ${devices.mobileMax} {
    overflow: hidden;
  }
  @media ${devices.tablet} {
    padding: 20px ${padding.tablet};
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 830px) {
    justify-content: space-around;
  }
  @media ${devices.laptop} {
    padding: 50px ${padding.laptop};
  }
  @media ${devices.desktop} {
    padding: 50px ${padding.desktop};
  }
`

const Social = styled.div`
  @media ${devices.mobileMax} {
    margin: 50px 0px;
  }
`

export { SocialMediaContainer, Social }
