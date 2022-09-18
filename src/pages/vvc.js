import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import AboutUs from "../components/vvc/about-us/about-us"
import { H2, P } from "../constants/typography"
import Carousel from "../components/carousel-shared/carousel"
import ServiceCard from "../components/vvc/services/services"
import { OurServices, CardsContainer } from "../page-styles/vvc-styles"
import Members from "../components/vvc/members/members"
import CTACard from "../components/vvc/cta/cta"
import Testimonials from "../components/vvc/testimonials/testimonials"
import {
  GeoshapeContainer,
  Geoshape,
} from "../components/geoshape/geoshape-styles"
import top_svg from "../images/vvc/top_svg.svg"
import middle_svg from "../images/vvc/middle_svg.svg"

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
      <GeoshapeContainer>
        <Geoshape
          marginTop="-17rem"
          src={top_svg}
          alt="blue and white geometric shape"
          style={{ zIndex: "-20" }}
        />
      </GeoshapeContainer>
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
      <GeoshapeContainer>
        <Geoshape
          marginTop="-16rem"
          src={middle_svg}
          alt="blue and white geometric shape"
          style={{ zIndex: "-20" }}
        />
      </GeoshapeContainer>
      <Members title={vvc.meetTheTeamTitle} members={vvc.members} />
      <Testimonials
        title={vvc.clientTestimonialsTitle}
        testimonials={vvc.clientTestimonials}
      />
      <Carousel
        title={vvc.carouselTitle}
        carouselItems={vvc.carouselItems}
        minItems={0}
        openInNewTab={false}
        primary={true}
        version2={true}
      />
      <CardsContainer>
        {vvc.ctaCard.map((card, index) => {
          return (
            <CTACard
              key={card.ctaTitle}
              title={card.ctaTitle}
              blurb={card.ctaBlurb.ctaBlurb}
              buttonText={card.ctaButtonText}
              buttonLink={card.ctaButtonLink}
            />
          )
        })}
      </CardsContainer>
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
      clientTestimonialsTitle
      clientTestimonials {
        companyTitle
        testimonial {
          testimonial
        }
        logo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      carouselTitle
      carouselItems {
        title
        blurb {
          blurb
        }
        featuredImage {
          fluid(maxWidth: 999) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      ctaCard {
        ctaTitle
        ctaBlurb {
          ctaBlurb
        }
        ctaButtonText
        ctaButtonLink
      }
    }
  }
`
