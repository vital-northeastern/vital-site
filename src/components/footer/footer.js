import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  FooterLinks,
  FooterLink,
  FooterScroll,
} from "./footer-styles"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      contentfulFooter {
        headline
        email
        socialMedia {
          platform
          link
          logo {
            fluid(maxWidth: 750) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <FooterRowContainer>
        <FooterSubsectionContainer>
          <FooterDescription>
            {data.contentfulFooter.headline}
          </FooterDescription>
          <FooterLinks>
            <FooterLink href="/">Home</FooterLink>

            <FooterLink href="/what-we-do">What We Do</FooterLink>

            <FooterLink href="/whats-happening">What's Happening</FooterLink>

            <FooterLink href="/get-involved">Get Involved</FooterLink>

            <FooterLink href="/our-team">Meet the Team</FooterLink>
          </FooterLinks>
        </FooterSubsectionContainer>
        <FooterSubsectionContainer>
          <FooterScroll>Back To Top ↑</FooterScroll>
          <FooterContactContainer>
            <FooterSocialBlock>
              {data.contentfulFooter.socialMedia.map(social => {
                return (
                  <a href={social.link}>
                    <div
                      style={{
                        width: `50px`,
                      }}
                    >
                      <Img
                        className="featured"
                        fluid={social.logo.fluid}
                        alt={social.platform}
                      />
                    </div>
                  </a>
                )
              })}
            </FooterSocialBlock>
          </FooterContactContainer>
          <FooterContactContainerEmail>
            <ConnectContactText>contact:</ConnectContactText>
            <MailtoLink href={"mailto:" + data.contentfulFooter.email}>
              {data.contentfulFooter.email}
            </MailtoLink>
          </FooterContactContainerEmail>
        </FooterSubsectionContainer>
      </FooterRowContainer>
      <hr />
      <FooterRowContainer>
        <FooterSubsectionContainer>
          <FooterSmallCaption>
            Northeastern University | ViTAL &copy; {new Date().getFullYear()}{" "}
          </FooterSmallCaption>
        </FooterSubsectionContainer>
        <LoveByScout>
          Made with ♥ by{" "}
          <a href="https://scout.camd.northeastern.edu/">Scout</a>
        </LoveByScout>
      </FooterRowContainer>
    </FooterContainer>
  )
}

export default Footer
