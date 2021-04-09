import styled from "styled-components"
import { Button } from "../../../constants/buttons"
import { devices } from "../../../constants/devices"

const EboardContainer = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 10px 30px;
  }
  @media ${devices.tablet} {
    padding: 10px 40px;
  }
  @media ${devices.laptop} {
    margin-top: 25px;
    padding: 10px 75px;
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
    position: absolute;
    right: 10%;
  }
`

const EboardButton = styled(Button)`
  padding: 16px 42px;
`

export {
  EboardContainer,
  TextContainer,
  ButtonContainer,
  ButtonPosition,
  EboardButton,
}
