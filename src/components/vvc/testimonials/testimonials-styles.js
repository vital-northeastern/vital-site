import styled from "styled-components"
import { devices, padding } from "../../../constants/devices"
import { H2 } from "../../../constants/typography"

const Container = styled.div`
  @media ${devices.mobile} {
    padding: 50px ${padding.mobile} 0px;
  }
  @media ${devices.tablet} {
    padding: 100px ${padding.tablet};
  }
  @media ${devices.laptop} {
    padding: 170px ${padding.laptop} 50px;
  }
  @media ${devices.desktop} {
    padding-left: ${padding.desktop};
    padding-right: ${padding.desktop};
  }
`

const TestimonialsTitle = styled(H2)`
  text-align: center;
`

const TestimonialsContainer = styled.div`
  margin-top: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media ${devices.laptop} {
    margin-top: 3.5rem;
  }
`

export { Container, TestimonialsTitle, TestimonialsContainer }
