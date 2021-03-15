import React from "react"

import {
  FooterDescription,
  FooterSubsectionContainer,
  FooterContainer,
  FooterSocialBlock,
  FooterContactContainer,
  FooterContactContainerEmail,
  FooterRowContainer,
  FooterSmallCaption,
  EmailContainer,
  MailtoLink,
  ConnectContactText,
  LoveByScout,
} from "./footer-styles"

const Footer = () => (
  <FooterContainer>
    <FooterRowContainer>
      <FooterSubsectionContainer>
        <FooterDescription>Test</FooterDescription>
      </FooterSubsectionContainer>
      <FooterSubsectionContainer>
        <FooterContactContainer>
          <ConnectContactText>CONNECT</ConnectContactText>
          <FooterSocialBlock>
            <a
              target="_blank"
              href="https://www.instagram.com/vitalnortheastern/"
            ></a>
            <a
              target="_blank"
              href="https://www.facebook.com/vitalnortheastern"
            ></a>
            <a target="_blank" href="https://medium.com/vital-northeastern"></a>
          </FooterSocialBlock>
        </FooterContactContainer>
        <FooterContactContainerEmail>
          <ConnectContactText>CONTACT</ConnectContactText>
          <EmailContainer>
            <MailtoLink href={"mailto:" + "vital.northeastern@gmail.com"}>
              vital.northeastern@gmail.com
            </MailtoLink>
          </EmailContainer>
        </FooterContactContainerEmail>
      </FooterSubsectionContainer>
    </FooterRowContainer>
    <hr />
    <FooterRowContainer>
      <FooterSubsectionContainer>
        <FooterSmallCaption>
          Northeastern University | HAN &copy; {new Date().getFullYear()}{" "}
        </FooterSmallCaption>
      </FooterSubsectionContainer>
      <LoveByScout>
        Made with ♥ by{" "}
        <a target="_blank" href="https://scout.camd.northeastern.edu/">
          Scout
        </a>
      </LoveByScout>
    </FooterRowContainer>
  </FooterContainer>
)

export default Footer
