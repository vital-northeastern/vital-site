import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { devices } from "../../../constants/devices"
import { Geoshape } from "../../geoshape/geoshape-styles"

const GeoshapeApplication = styled(Geoshape)`
  @media ${devices.desktop} {
    width: 430px;
    margin-top: -9.5rem;
  }
  @media (min-width: 1600px) {
    width: 480px;
    margin-top: -11.3rem;
  }
`

const ApplicationContainer = styled.div`
@media ${devices.mobile} {
  margin: 0.7rem auto 7rem auto;
@media ${devices.laptop} {
  margin: 2rem auto 8rem auto;
}
  text-align: center;
  width: 100%;
`

const H2Header = styled(H2)`
  margin-bottom: 1rem;
`

const MobileImageContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: -10;
  margin-top: -16rem;
  @media ${devices.tablet} {
    display: none;
  }
`

export {
  GeoshapeApplication,
  ApplicationContainer,
  H2Header,
  MobileImageContainer,
}
