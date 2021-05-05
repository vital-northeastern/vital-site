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
import top_left_svg from "../images/club-programming/top-left.svg"
import right_svg from "../images/club-programming/right.svg"
import middle_left_svg from "../images/club-programming/middle_left.svg"
import bottom_right_svg from "../images/club-programming/bottom_right.svg"
import {
  Geoshape,
  GeoshapeContainer,
} from "../components/geoshape/geoshape-styles"
import {
  TopGeoshape,
  BottomGeoshape,
  MiddleLeftGeoshape,
} from "../page-styles/club-programming-styles"

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
        mobileTitle={clubProgramming.title}
        subheading={clubProgramming.subheadingForTitle}
        imageBool={false}
        longTitle={true}
      />
      <GeoshapeContainer>
        <TopGeoshape src={top_left_svg} alt="blue and white geometric shape" />
      </GeoshapeContainer>
      <SpeakerSeries
        title={speakerSeries.title}
        blurb={speakerSeries.blurb}
        ctaTitle={speakerSeries.ctaTitle}
        ctaLink={speakerSeries.ctaLink}
        featuredImage={speakerSeries.featuredImage}
      />
      <GeoshapeContainer>
        <Geoshape
          marginTop="-10rem"
          right={true}
          src={right_svg}
          alt="blue and white geometric shape"
        />
      </GeoshapeContainer>
      <Speakers
        title={clubProgramming.pastSpeakersTitle}
        speakers={clubProgramming.speakers}
      />
      <EventSpotlight eventSpotlights={clubProgramming.eventSpotlights} />
      <GeoshapeContainer>
        <MiddleLeftGeoshape
          marginTop="-50rem"
          src={middle_left_svg}
          alt="blue and white geometric shape"
        />
      </GeoshapeContainer>
      <CommunityEvents
        title={communityEvents.title}
        blurb={communityEvents.blurb.blurb}
        ctaTitle={communityEvents.ctaTitle}
        ctaLink={communityEvents.ctaLink}
        featuredImage={communityEvents.featuredImage}
        backgroundGradient={communityEvents.backgroundGradient}
      />
      <GeoshapeContainer>
        <BottomGeoshape
          marginTop="-16rem"
          right={true}
          src={bottom_right_svg}
          alt="blue and white geometric shape"
        />
      </GeoshapeContainer>
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
        backgroundGradient={conferences.backgroundGradient}
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
        backgroundGradient {
          fluid {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      pastSpeakersTitle
      speakers {
        name
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
