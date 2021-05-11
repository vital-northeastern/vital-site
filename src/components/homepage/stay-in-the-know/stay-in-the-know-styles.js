import styled from "styled-components"
import { H2 } from "../../../constants/typography"

const KnowContainer = styled.div`
  display: flex;
  padding: 100px 0 180px 0;
  justify-content: space-between;
`

const KnowInfoCont = styled.div`
  width: 50%;
`

const KnowInfo = styled.div`
  width: 60%;
  max-width: 350px;
  margin: 0 auto;
`

const KnowImageSection = styled.div`
  width: 50%;
  background: linear-gradient(
      209.62deg,
      #99c0fa 20.22%,
      rgba(255, 255, 255, 0) 85.09%
    ),
    linear-gradient(147.64deg, #c8dcee 19.39%, #546bdf 94.2%);
  position: relative;
  height: 450px;
`

const KnowImageHolder = styled.img`
  position: absolute;
  top: -40px;
  right: -40px;
`

const KnowImageHeader = styled(H2)`
  transform: rotate(90deg);
  position: absolute;
  top: -20px;
  left: -40px;
`

export {
  KnowContainer,
  KnowInfoCont,
  KnowInfo,
  KnowImageSection,
  KnowImageHolder,
  KnowImageHeader,
}
