import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import SpeakerSeries from "../components/club-programming/speaker-series/speaker-series"
import Speakers from "../components/club-programming/speakers/speakers"
import EventSpotlight from "../components/club-programming/event-spotlight/event-spotlight"
import CommunityEvents from "../components/club-programming/community-events/community-events"
import Volunteering from "../components/club-programming/volunteering/volunteering"
import CoffeeChats from "../components/club-programming/coffee-chats/coffee-chats"
import Conferences from "../components/club-programming/conferences/conferences"

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
      <SpeakerSeries
        title={speakerSeries.title}
        blurb={speakerSeries.blurb}
        ctaTitle={speakerSeries.ctaTitle}
        ctaLink={speakerSeries.ctaLink}
        featuredImage={speakerSeries.featuredImage}
      />
      <Speakers
        title={clubProgramming.pastSpeakersTitle}
        speakers={clubProgramming.speakers}
      />
      <EventSpotlight eventSpotlights={clubProgramming.eventSpotlights} />
      <CommunityEvents
        title={communityEvents.title}
        blurb={communityEvents.blurb.blurb}
        ctaTitle={communityEvents.ctaTitle}
        ctaLink={communityEvents.ctaLink}
        featuredImage={communityEvents.featuredImage}
      />
      <Volunteering
        title={volunteering.title}
        blurb={volunteering.blurb.blurb}
        ctaTitle={volunteering.ctaTitle}
        ctaLink={volunteering.ctaLink}
        featuredImage={volunteering.featuredImage}
      />
      <CoffeeChats
        title={coffeeChats.title}
        blurb={coffeeChats.blurb.blurb}
        ctaTitle={coffeeChats.ctaTitle}
        ctaLink={coffeeChats.ctaLink}
        featuredImage={coffeeChats.featuredImage}
      />
      <Conferences
        title={conferences.title}
        blurb={conferences.blurb.blurb}
        featuredImage={conferences.featuredImage}
      />
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
