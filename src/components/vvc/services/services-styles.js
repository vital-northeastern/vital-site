import styled from "styled-components"
import { devices, size } from "../../../constants/devices"
import { blueGradient, boxShadow, white } from "../../../constants/colors"
import { H2, P } from "../../../constants/typography"

const ServiceCardContainer = styled.div`
  background: ${blueGradient};
  width: 42.3vw;
  margin-bottom: 1.5rem;
  padding: 2em;
  text-align: center;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: ${boxShadow};
  }
`

const ServiceTitle = styled(H2)`
  color: ${white};
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

const ServiceBlurb = styled(P)`
  color: ${white};
  margin-bottom: 0 !important;
`

export { ServiceCardContainer, ServiceTitle, ServiceBlurb }
