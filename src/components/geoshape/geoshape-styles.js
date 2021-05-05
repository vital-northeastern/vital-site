import styled from "styled-components"
import { devices } from "../../constants/devices"

const GeoshapeContainer = styled.div`
  z-index: -10;
  @media ${devices.tabletMax} {
    display: none;
  }
`

const Geoshape = styled.img`
  position: absolute;
  margin-top: ${props => props.marginTop};
  ${({ right }) =>
    right &&
    `
  right: 0;
  `}
  ${({ middle }) =>
    middle &&
    `
  transform: scale(0.85, 0.85);
  left: 32%;
  @media (max-width: 1220px) {
    transform: scale(0.72, 0.72);
    left: 28%;
  }
  @media ${devices.desktop} {
    transform: scale(0.92, 0.92);
    margin-top: 17.5rem;
    left: 34%;
  }
  @media (min-width: 1600px) {
    transform: scale(1, 1);
    margin-top: 21rem;
  }
  `}
`

export { GeoshapeContainer, Geoshape }
