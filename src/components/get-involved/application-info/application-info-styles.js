import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { shadowGray } from "../../../constants/colors"
import { devices } from "../../../constants/devices"
import { Geoshape } from "../../geoshape/geoshape-styles"

const GeoshapeApplication = styled(Geoshape)`
  @media ${devices.desktop} {
    width: 450px;
    margin-top: -12rem;
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
  margin-bottom: 17px;
`

const ButtonEmail = styled(Button)`
  margin-top: -4px;
  box-shadow: 1px 1px 2px ${shadowGray};
  padding: 18px 45px;
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
  ButtonEmail,
  MobileImageContainer,
}
