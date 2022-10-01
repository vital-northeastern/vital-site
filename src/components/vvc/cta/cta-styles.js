import styled from "styled-components"
import { devices, size } from "../../../constants/devices"
import { boxShadow, imageGradient } from "../../../constants/colors"
import { H2 } from "../../../constants/typography"

const CTACardContainer = styled.div`
  background: ${imageGradient};
  width: 100%;
  margin-top: 4rem;
  padding: 3em 2em;
  margin-bottom: 1.5rem;
  text-align: center;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: ${boxShadow};
  }

  @media ${devices.laptop} {
    width: 42.1vw;
    padding: 10em 2em;
  }

  @media ${devices.desktop} {
    width: 40vw;
  }
`

const CTATitle = styled(H2)`
  font-size: calc(
    19px + (26 - 19) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
  @media ${devices.mobile} {
    margin-bottom: 10px;
  }
  @media ${devices.tablet} {
    margin-bottom: 20px;
  }
`

export { CTACardContainer, CTATitle }
