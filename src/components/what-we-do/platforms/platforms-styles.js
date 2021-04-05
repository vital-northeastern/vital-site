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
  padding-top: 18px;
  padding-right: 5px;
`

const LineOne = styled.div`
  height: 3px;
  background: ${royalBlue};
`

const PlatformTwo = styled.div`
  display: flex;
  width: 78vw;
`

const LineContainerTwo = styled.div`
  width: 65%;
  padding-top: 18px;
  padding-right: 5px;
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
  LineOne,
  PlatformTwo,
  LineContainerTwo,
  PlatformTwoContent,
  PlatformTitle,
  PlatformButton,
}
