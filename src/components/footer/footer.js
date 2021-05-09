import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import scrollTo from "gatsby-plugin-smoothscroll"

import {
  FooterDescription,
  FooterSubsectionContainer,
  FooterContainer,
  FooterSocialBlock,
  FooterContactContainer,
  FooterContactContainerEmail,
  FooterContactContainerEmailSmall,
  FooterRowContainer,
  MailtoLink,
  ConnectContactText,
  FooterLinks,
  FooterLinkCustom,
  FooterScroll,
  FooterSocialIcon,
  MailingListBlock,
  MailingListSmall,
  MailingListLabel,
  MailingListInput,
  MailingListButton,
  ScoutSignature,
  ScoutLink,
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
    <FooterContainer role="img" aria-label="blue geometric polygon shape">
      <FooterRowContainer>
        <FooterSubsectionContainer>
          <FooterDescription>
            {data.contentfulFooter.headline}
          </FooterDescription>
          <FooterLinks>
            <FooterLinkCustom href="/">Home</FooterLinkCustom>
            <FooterLinkCustom href="/what-we-do">What We Do</FooterLinkCustom>
            <FooterLinkCustom href="/whats-happening">
              What's Happening
            </FooterLinkCustom>
            <FooterLinkCustom href="/get-involved">
              Get Involved
            </FooterLinkCustom>
            <FooterLinkCustom href="/our-team">Meet The Team</FooterLinkCustom>
            <FooterLinkCustom href="/club-programming">
              Club Programming
            </FooterLinkCustom>
          </FooterLinks>
        </FooterSubsectionContainer>
        <FooterSubsectionContainer>
          <FooterScroll onClick={() => scrollTo("#scrollTop")}>
            Back To Top ↑
          </FooterScroll>
          <FooterContactContainer>
            <FooterSocialBlock>
              {data.contentfulFooter.socialMedia.map(social => {
                return (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={social.link}
                  >
                    <FooterSocialIcon>
                      <Img
                        className="featured"
                        fluid={social.logo.fluid}
                        alt={social.platform}
                      />
                    </FooterSocialIcon>
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

      <FooterContactContainerEmailSmall>
        <ConnectContactText>contact:</ConnectContactText>
        <MailtoLink href={"mailto:" + data.contentfulFooter.email}>
          {data.contentfulFooter.email}
        </MailtoLink>
      </FooterContactContainerEmailSmall>
      {/*
       * If you want to get away with not using the Mailchimp API you can customize thier default
       * form. https://mailchimp.com/help/advanced-form-customization/
       *
       * Do not change any of the Id, name, or already set value fields in MailingListBlock
       */}
      <MailingListBlock
        action="https://facebook.us19.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="c45ced259329ec3d3e89ebe55" />
        <input type="hidden" name="id" value="8afc898548" />
        <MailingListLabel htmlFor="MERGE0">Join mailing list:</MailingListLabel>
        <MailingListSmall>
          <MailingListInput
            type="email"
            autocapitalize="off"
            autocorrect="off"
            name="MERGE0"
            id="MERGE0"
            placeholder="email address here"
          />
          <MailingListButton type="submit">SUBMIT</MailingListButton>
        </MailingListSmall>
      </MailingListBlock>
      <ScoutSignature>
        MADE WITH ♥ BY{" "}
        <ScoutLink href="https://scout.camd.northeastern.edu/" target="_blank">
          SCOUT
        </ScoutLink>
      </ScoutSignature>
    </FooterContainer>
  )
}

export default Footer
