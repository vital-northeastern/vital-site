import styled from "styled-components"
import { Geoshape } from "../components/geoshape/geoshape-styles"

const TopGeoshape = styled(Geoshape)`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
`

export { TopGeoshape }
