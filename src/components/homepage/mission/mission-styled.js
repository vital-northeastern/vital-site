import styled from "styled-components"

const colors = {
  primary: "#001049", // dark blue
  secondary: "#607AE6", // light blue
}

const MissionContainer = styled.div`
  display: flex;
  justify-content: center;
`

const MissionInnerCont = styled.div``

const MissionHeader = styled.h2`
  color: ${colors.primary};
`

const MissionText = styled.p`
  width: 450px;
`

const MissionLowerHalf = styled.div`

margin-left 90px;
`

const MissionButton = styled.button`
  padding: 10px 20px;
  border-radius: 35px;
  background-color: ${colors.primary};
  border: none;
  color: white;
`

export {
  MissionContainer,
  MissionHeader,
  MissionText,
  MissionButton,
  MissionLowerHalf,
}
