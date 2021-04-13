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
  FooterLink,
  FooterScroll,
  FooterSocialIcon,
  MailingListBlock,
  MailingListSmall,
  MailingListLabel,
  MailingListInput,
  MailingListButton,
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

  console.log(data.contentfulFooter.socialMedia)

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
          <FooterScroll onClick={() => scrollTo("#scrollTop")}>
            Back To Top ↑
          </FooterScroll>
          <FooterContactContainer>
            <FooterSocialBlock>
              {data.contentfulFooter.socialMedia.map(social => {
                return (
                  <a href={social.link}>
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
        <MailingListLabel for="MERGE0">Join mailing list:</MailingListLabel>
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
    </FooterContainer>
  )
}

export default Footer
