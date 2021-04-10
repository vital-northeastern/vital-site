import React from "react"
import { P } from "../../../constants/typography"
import { Container, H2Header, ButtonEmail } from "./application-info-styles"

const ApplicationInfo = ({
  subheading,
  applicationEmail,
  ctaLink,
  ctaTitle,
}) => {
  return (
    <Container>
      <H2Header>{subheading}</H2Header>
      <P>{applicationEmail}</P>
      <a href={ctaLink} target="_blank" rel="noreferrer">
        <ButtonEmail primary={true}>{ctaTitle}</ButtonEmail>
      </a>
    </Container>
  )
}

export default ApplicationInfo
