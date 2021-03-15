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
            <p>
              <FooterLink href="/">Home</FooterLink>
            </p>
            <p>
              <FooterLink href="/what-we-do">What We Do</FooterLink>
            </p>
            <p>
              <FooterLink href="/whats-happening">What's Happening</FooterLink>
            </p>
            <p>
              <FooterLink href="/get-involved">Get Involved</FooterLink>
            </p>
            <p>
              <FooterLink href="/our-team">Meet the Team</FooterLink>
            </p>
          </FooterLinks>
        </FooterSubsectionContainer>
        <FooterSubsectionContainer>
          <FooterContactContainer>
            <FooterSocialBlock>
              {data.contentfulFooter.socialMedia.map(social => {
                return (
                  <a href={social.link}>
                    <div style={{ width: `50px`, marginBottom: `1.45rem` }}>
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
            <ConnectContactText>contact</ConnectContactText>
            <EmailContainer>
              <MailtoLink href={"mailto:" + data.contentfulFooter.email}>
                {data.contentfulFooter.email}
              </MailtoLink>
            </EmailContainer>
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
