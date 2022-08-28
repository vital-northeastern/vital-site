import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import AboutUs from "../components/vvc/about-us/about-us"
import { H2, P } from "../constants/typography"
import left_svg from "../images/what-we-do/mobile_left.svg"
import right_svg from "../images/what-we-do/mobile_right.svg"
import ServiceCard from "../components/vvc/services/services"
import { OurServices, CardsContainer } from "../page-styles/vvc-styles"
import Members from "../components/vvc/members/members"

const VVC = props => {
  const vvc = get(props, "data.contentfulVvcPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="VVC" />
      <Header
        title={vvc.title}
        subheading={vvc.subheadingForTitle.subheadingForTitle}
        imageBool={false}
      />
      <AboutUs
        title={vvc.aboutUsTitle}
        blurb={vvc.aboutUsBlurb}
        image={vvc.aboutUsPhoto}
        imageAlt={vvc.aboutUsPhoto.description}
        ctaText={vvc.aboutUsCtaText}
        ctaLink={vvc.aboutUsCtaLink}
      />
      <OurServices>
        <H2>{vvc.ourServicesTitle}</H2>
        <P>{vvc.ourServicesBlurb.ourServicesBlurb}</P>
      </OurServices>
      <CardsContainer>
        {vvc.serviceCards.map((card, index) => {
          return (
            <ServiceCard
              key={card.cardTitle}
              title={card.cardTitle}
              blurb={card.cardBlurb.cardBlurb}
            />
          )
        })}
      </CardsContainer>
      <Members title={vvc.meetTheTeamTitle} members={vvc.members} />
    </Layout>
  )
}

export default VVC

export const pageQuery = graphql`
  query vvcQuery {
    contentfulVvcPage {
      title
      subheadingForTitle {
        subheadingForTitle
      }
      aboutUsTitle
      aboutUsBlurb {
        aboutUsBlurb
      }
      aboutUsCtaText
      aboutUsCtaLink
      aboutUsPhoto {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
        description
      }
      ourServicesTitle
      ourServicesBlurb {
        ourServicesBlurb
      }
      serviceCards {
        cardTitle
        cardBlurb {
          cardBlurb
        }
      }
      meetTheTeamTitle
      members {
        name
        caption
        image {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
    }
  }
`
