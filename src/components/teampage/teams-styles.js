import styled from "styled-components"

const TeamContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  padding-bottom: 200px;
`

// background-image: url(${props => "https://" + props.photoUrl});

const TeamTitle = styled.h2`
  color: #001049;
  text-align: ${props => (props.index % 2 === 0 ? "left" : "right")};
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const TeamMembersContainer = styled.div``

export { TeamContainer, TeamTitle, TeamMembersContainer }
