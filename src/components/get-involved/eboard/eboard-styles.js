import styled from "styled-components"
import { Button } from "../../../constants/buttons"
import { devices } from "../../../constants/devices"
import { H2 } from "../../../constants/typography"

const EboardContainer = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 1rem 0rem 2rem;
  }
  @media ${devices.tablet} {
    display: block;
    padding: 1rem 0rem;
  }
  @media ${devices.laptop} {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }
`

const TextContainer = styled.div`
  width: 50%;
  padding-right: 40px;
  @media ${devices.tabletMax} {
    width: 100%;
    padding-right: 0px;
    margin: 0 auto;
  }
`

const H2Header = styled(H2)`
  margin-bottom: 1rem;
`

const ButtonContainer = styled.div`
  @media ${devices.tabletMax} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 50%;
  }
`

const ButtonPosition = styled.div`
  @media ${devices.tabletMax} {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  @media ${devices.laptop} {
    margin-left: 60%;
  }
  @media (min-width: 1220px) {
    margin-left: 68%;
  }
  @media ${devices.desktop} {
    margin-left: 70%;
  }
`

const EboardButton = styled(Button)`
  padding: 18px 51px;
`

export {
  EboardContainer,
  TextContainer,
  H2Header,
  ButtonContainer,
  ButtonPosition,
}
