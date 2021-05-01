import styled from "styled-components"
import { devices } from "../../constants/devices"
import { imageGradient } from "../../constants/colors"
import { H2 } from "../../constants/typography"

const ButtonContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${devices.laptop} {
    display: block;
  }
`

const H2Title = styled(H2)`
  margin-bottom: ${props => (props.first ? "0.85rem" : "0.9rem")};
  @media ${devices.mobile} {
    margin-top: ${props => (props.first ? "0.85rem" : "1.4rem")};
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    ${({ lineheight }) =>
      lineheight &&
      `
  line-height: 38px;
`}
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: ${props => (props.right ? "1" : "")};
  }
  @media ${devices.laptop} {
    width: ${props => (props.width ? props.width : "50%")};
    order: ${props => (props.right ? "2" : "")};
    ${({ background }) =>
      background &&
      `
    background: ${imageGradient};
`}
  }
`

export { ButtonContainer, H2Title, ImageContainer }
