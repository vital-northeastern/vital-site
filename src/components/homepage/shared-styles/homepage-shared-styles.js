import styled from "styled-components"
import { devices } from "../../../constants/devices"

const HomepageContentContainer = styled.div`
  padding: 0 0 60px 0;
  overflow-x: hidden;
  @media ${devices.tablet} {
    padding-bottom: 100px;
  }
`

const ButtonHolder = styled.div`
  @media ${devices.mobileMax} {
    display: flex;
    justify-content: center;
  }
`

export { HomepageContentContainer, ButtonHolder }
