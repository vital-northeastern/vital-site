import styled from "styled-components"
import { devices } from "../../../constants/devices"

const HomepageContentContainer = styled.div`
  padding: 0 0 100px 0;
  overflow-x: hidden;
`

const ButtonHolder = styled.div`
  @media ${devices.mobileMax} {
    display: flex;
    justify-content: center;
  }
`

export { HomepageContentContainer, ButtonHolder }
