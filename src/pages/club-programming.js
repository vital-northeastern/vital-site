import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"

const ClubProgramming = props => {
  const clubProgramming = get(props, "data.contentfulClubProgramming")
  const speakerSeries = clubProgramming.clubProgrammingSection[0]
  const communityEvents = clubProgramming.clubProgrammingSection[1]
  const volunteering = clubProgramming.clubProgrammingSection[2]
  const coffeeChats = clubProgramming.clubProgrammingSection[3]
  const conferences = clubProgramming.clubProgrammingSection[4]

  return (
    <Layout navbarstyle="gradient">
      <SEO title="Club Programming" />
      <Header
        title={clubProgramming.title}
        subheading={clubProgramming.subheadingForTitle}
        imageBool={false}
      />
      <p>Welcome to page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ClubProgramming

export const pageQuery = graphql`
  query programmingQuery {
    contentfulClubProgramming {
      title
      subheadingForTitle
      clubProgrammingSection {
        title
        blurb {
          blurb
        }
        ctaTitle
        ctaLink
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      pastSpeakersTitle
      speakers {
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          description
        }
        caption
      }
      eventSpotlights {
        typeOfEvent
        eventTitle
        blurb {
          blurb
        }
        ctaTitle
        ctaLink
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
    }
  }
`
