import styled from "styled-components"
import { H2 } from "../../../constants/typography"
import { Button } from "../../../constants/buttons"
import { size } from "../../../constants/devices"
import { royalBlue } from "../../../constants/colors"

const Title = styled.div`
  padding-left: 75px;
`

const PlatformOne = styled.div`
  display: flex;
  width: 50vw;
`

const PlatformOneContent = styled.div`
  width: 60%;
`

const LineContainerOne = styled.div`
  width: 40%;
  padding-right: 18px;
  display: flex;
`

const Line = styled.span`
  height: 2px;
  margin-top: 18px;
  background: ${royalBlue};
  width: 95%;
`

const Dot = styled.span`
  height: 13px;
  width: 13px;
  margin-top: 13px;
  background-color: ${royalBlue};
  border-radius: 50%;
`

const PlatformTwo = styled.div`
  display: flex;
  width: 78vw;
  padding-top: 22px;
`

const LineContainerTwo = styled.div`
  width: 65%;
  display: flex;
`

const PlatformTwoContent = styled.div`
  width: 35%;
`

const PlatformTitle = styled(H2)`
  font-size: calc(
    16px + (26 - 16) *
      ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile}))
  );
`

const PlatformButton = styled(Button)`
  font-size: 12px;
  padding: 16px 48px;
`

export {
  Title,
  PlatformOne,
  LineContainerOne,
  PlatformOneContent,
  Line,
  Dot,
  PlatformTwo,
  LineContainerTwo,
  PlatformTwoContent,
  PlatformTitle,
  PlatformButton,
}
