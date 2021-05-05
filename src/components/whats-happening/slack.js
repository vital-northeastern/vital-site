import React from "react"
import Img from "gatsby-image"

import { SlackContainer, SlackContent, SlackImg } from "./slack-styles"
import { Button } from "../../constants/buttons"
import { P } from "../../constants/typography"

const Slack = ({ title, link, logo }) => {
  return (
    <SlackContainer>
      <div>
        <SlackImg src={logo.fluid.src} alt={logo.description}></SlackImg>
      </div>
      <SlackContent>
        <P>
          There is no better way to meet the e-board and other club members than
          to join our Slack! You will get to meet new people through coffee
          chats, stay updated on ViTAL events, and learn about news and
          opportunities in the healthcare world!{" "}
        </P>
        <a href={link}>
          <Button type="button" primary={true}>
            {title}
          </Button>
        </a>
      </SlackContent>
    </SlackContainer>
  )
}

export default Slack
