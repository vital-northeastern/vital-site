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
  display: block;
  width: 43vw;
  z-index: -1;
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
    transform: scale(0.72, 0.72);
    left: 28%;
  }
  `}
`

export { GeoshapeContainer, Geoshape }
