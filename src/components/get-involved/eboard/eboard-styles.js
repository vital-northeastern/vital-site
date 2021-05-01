import styled from "styled-components"
import { Button } from "../../../constants/buttons"
import { devices, padding } from "../../../constants/devices"
import { H2 } from "../../../constants/typography"
import { shadowGray } from "../../../constants/colors"

const EboardContainer = styled.div`
  @media ${devices.mobile} {
    display: block;
    padding: 1rem ${padding.mobile};
  }
  @media ${devices.tablet} {
    padding: 1rem ${padding.tablet};
  }
  @media ${devices.laptop} {
    margin-top: 12px;
    padding: 1rem ${padding.laptop};
    display: flex;
    align-items: center;
  }
  @media ${devices.desktop} {
    padding: 1rem ${padding.desktop};
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
  margin-bottom: 0.7rem;
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
`

const EboardButton = styled(Button)`
  padding: 18px 51px;
  box-shadow: 1px 1px 2px ${shadowGray};
`

export {
  EboardContainer,
  TextContainer,
  H2Header,
  ButtonContainer,
  ButtonPosition,
  EboardButton,
}
