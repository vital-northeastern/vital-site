import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { imageGradient } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"

const SocialMediaSectionContainer = styled.div`
  padding: 100px 0;
  @media ${devices.mobileMax} {
    padding-bottom: 50px;
  }
`

const SocialTitle = styled(H2)`
  text-align: center;
`

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
    justify-content: space-center;
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

export { SocialMediaSectionContainer, SocialMediaContainer, SocialTitle }
