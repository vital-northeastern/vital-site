import styled from "styled-components"
import { navyBlue } from "../../../constants/colors"
import { devices, padding } from "../../../constants/devices"
import { H2 } from "../../../constants/typography"

const KnowContainer = styled.div`
  color: ${navyBlue};
  display: flex;
  padding: 100px 0 135px 0;
  justify-content: space-between;
  @media ${devices.mobileMax} {
    flex-direction: column-reverse;
    padding: 0;
  }
`

const KnowInfoCont = styled.div`
  width: 50%;
  @media ${devices.mobileMax} {
    width: 100%;
  }
`

const KnowInfo = styled.div`
  width: 60%;
  max-width: 350px;
  margin: 0 auto;
  @media ${devices.mobileMax} {
    width: 100%;
    box-sizing: border-box;
    padding: 0 ${padding.mobile};
    margin: 0;
    max-width: initial;
  }
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
  padding-top: 36%;
  @media ${devices.mobileMax} {
    width: calc(100% - ${padding.mobile});
    margin-top: 30%;
    padding-top: 58%;
  }
  @media (min-width: 1700px) {
    padding-top: 26%;
  }
`

const KnowImageHolder = styled.img`
  position: absolute;
  top: -40px;
  right: -40px;
  max-width: 80%;
  @media ${devices.mobileMax} {
    margin-left: auto;
    margin-right: auto;
    left: 26px;
    right: 0;
    max-width: 96%;
  }
`

const KnowImageHeader = styled(H2)`
  transform: rotate(90deg);
  position: absolute;
  top: -20px;
  left: -40px;
  @media ${devices.mobileMax} {
    display: none;
  }
  @media (min-width: 1700px) {
    left: ${padding.desktop};
  }
`

export {
  KnowContainer,
  KnowInfoCont,
  KnowInfo,
  KnowImageSection,
  KnowImageHolder,
  KnowImageHeader,
}
