import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import HHIC from "../components/case-competition/hhic/hhic"
import WinningCase from "../components/case-competition/winning-case/winning-case"

const CaseCompeition = props => {
  const caseComp = get(props, "data.contentfulCaseCompetitionPage")

  return (
    <Layout navbarstyle="gradient">
      <SEO title="Case Competition" />
      <Header
        title={caseComp.title}
        mobileTitle={caseComp.title}
        subheading={caseComp.subheadingForTitle}
        imageBool={false}
        longTitle={true}
      />
      <HHIC
        title={caseComp.hhic.title}
        blurb={caseComp.hhic.blurb.blurb}
        introForNextDate={caseComp.hhic.introForNextDate}
        nextDate={caseComp.hhic.nextDate}
        ctaTitle={caseComp.hhic.ctaTitle}
        ctaLink={caseComp.hhic.ctaLink}
        featuredImage={caseComp.hhic.featuredImage}
      />
      <WinningCase
        title={caseComp.winningCase.title}
        blurb={caseComp.winningCase.blurb.blurb}
        ctaTitle={caseComp.winningCase.ctaTitle}
        ctaLink={caseComp.winningCase.ctaLink}
        featuredImage={caseComp.winningCase.featuredImage}
        imageCaption={caseComp.winningCase.imageCaption}
      />
    </Layout>
  )
}

export default CaseCompeition

export const pageQuery = graphql`
  query caseCompQuery {
    contentfulCaseCompetitionPage {
      title
      subheadingForTitle
      hhic {
        title
        blurb {
          blurb
        }
        introForNextDate
        nextDate
        ctaTitle
        ctaLink
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
      winningCase {
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
        imageCaption
      }
    }
  }
`
