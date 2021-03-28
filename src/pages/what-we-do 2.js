import React from "react"
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatWeDo = (props) => {

  const whatWeDo = get(props, 'data.contentfulWhatWeDo')

  return (
  <Layout>
    <SEO title="What We Do" />
    <h1>{whatWeDo.title}</h1>
    <ul className="posts">
    {whatWeDo.programmingCards.map((card, index) => {
      return (
        <li className="post">
        <h2>
          {card.title}
        </h2>
        <p className="excerpt">
          {card.shortDescription.shortDescription}
        </p>
      </li>
      )
    })}
    </ul>
  </Layout>
)
}

export default WhatWeDo

export const pageQuery = graphql`
query whatWeDoQuery {
  contentfulWhatWeDo {
    title
    programmingCards {
      title
      shortDescription {
        shortDescription
      }
    }
  }
}
`
