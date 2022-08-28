import React from "react"
import { H2 } from "../../../constants/typography"
import {
  Container,
  MembersContainer,
  MemberContainer,
  PCaption,
} from "./members-styles"
import Img from "gatsby-image"

const Members = ({ title, members }) => {
  return (
    <Container>
      <H2>{title}</H2>
      <MembersContainer>
        {members.map((member, index) => {
          return (
            <MemberContainer key={index}>
              <Img fluid={member.image.fluid} alt={member.image.description} />
              <PCaption>{member.name}</PCaption>
              <PCaption>{member.caption}</PCaption>
            </MemberContainer>
          )
        })}
      </MembersContainer>
    </Container>
  )
}

export default Members
