import React from "react"
import { P } from "../../../constants/typography"
import {
  ImageContainer,
  Image,
  ApplicationContainer,
  H2Header,
  ButtonEmail,
} from "./application-info-styles"
import bottom_svg from "../../../images/get-involved/bottom_shape.svg"

const ApplicationInfo = ({
  subheading,
  applicationEmail,
  ctaLink,
  ctaTitle,
}) => {
  return (
    <>
      <ImageContainer>
        <Image src={bottom_svg} alt="blue and white geometric shape" />
      </ImageContainer>
      <ApplicationContainer>
        <H2Header>{subheading}</H2Header>
        <P>{applicationEmail}</P>
        <a href={ctaLink}>
          <ButtonEmail primary={true}>{ctaTitle}</ButtonEmail>
        </a>
      </ApplicationContainer>
    </>
  )
}

export default ApplicationInfo
