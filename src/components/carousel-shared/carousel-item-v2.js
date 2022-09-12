import React from "react"
import { PCard } from "../../constants/typography"
import {
  CarItemHolder,
  CarItem,
  CarImageContainer,
  CarTextContainer,
  EventTitle,
} from "./carousel-styles"
import Img from "gatsby-image"

export const CarItemV2 = ({ item }) => {
  return (
    <CarItemHolder>
      <CarItem>
        <CarImageContainer>
          <Img
            fluid={item.featuredImage.fluid}
            alt={item.featuredImage.description}
          ></Img>
        </CarImageContainer>
        <CarTextContainer>
          <div>
            <EventTitle>{item.title}</EventTitle>
            <PCard>{item.blurb.blurb}</PCard>
          </div>
        </CarTextContainer>
      </CarItem>
    </CarItemHolder>
  )
}
