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
  ${({ platforms }) =>
    platforms &&
    `
  width: 37vw;
  @media (max-width: 1220px) {
    margin-top: 1.2rem;
  }
  @media (max-width: 1100px) {
    margin-top: 3rem;
  }
`}
  ${({ middle }) =>
    middle &&
    `
  transform: scale(0.85, 0.85);
  left: 32%;
  @media (max-width: 1220px) {
    transform: scale(0.75, 0.75);
    left: 30%;
  }
  `}
`

export { GeoshapeContainer, Geoshape }
