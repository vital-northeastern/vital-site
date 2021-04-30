import React from "react"
import { P } from "../../../constants/typography"
import {
  ApplicationContainer,
  H2Header,
  ButtonEmail,
  MobileImageContainer,
} from "./application-info-styles"
import { GeoshapeContainer, Geoshape } from "../../geoshape/geoshape-styles"
import bottom_svg from "../../../images/get-involved/bottom_shape.svg"
import bottom_mobile_svg from "../../../images/get-involved/bottom_mobile.svg"
import { shadowGray } from "../../../constants/colors"

const ApplicationInfo = ({
  subheading,
  applicationEmail,
  ctaLink,
  ctaTitle,
}) => {
  return (
    <>
      <GeoshapeContainer>
        <Geoshape
          marginTop="-8rem"
          right={true}
          src={bottom_svg}
          alt="blue and white geometric shape"
        />
      </GeoshapeContainer>
      <ApplicationContainer>
        <H2Header>{subheading}</H2Header>
        <P>{applicationEmail}</P>
        <a href={ctaLink}>
          <ButtonEmail
            padding="18px 45px"
            boxshadow={`1px 1px 2px ${shadowGray}`}
            primary={true}
          >
            {ctaTitle}
          </ButtonEmail>
        </a>
      </ApplicationContainer>
      <MobileImageContainer>
        <img src={bottom_mobile_svg} alt="blue and white geometric shape" />
      </MobileImageContainer>
    </>
  )
}

export default ApplicationInfo
