import styled from "styled-components"
import { Geoshape } from "../components/geoshape/geoshape-styles"

const TopGeoshape = styled(Geoshape)`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
`

const MiddleLeftGeoshape = styled(Geoshape)`
  @media (max-width: 1200px) {
    transform: scale(0.8, 0.8);
    position: absolute;
    left: 0;
    transform-origin: top left;
    margin-top: -35rem;
  }
`

const BottomGeoshape = styled(Geoshape)`
  z-index: -11;
  @media (max-width: 1200px) {
    transform: scale(0.8, 0.8);
    position: absolute;
    right: 0;
    transform-origin: top right;
    margin-top: -2rem;
  }
`

export { TopGeoshape, MiddleLeftGeoshape, BottomGeoshape }
