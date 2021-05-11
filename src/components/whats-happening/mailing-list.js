import React from "react"
import { H2 } from "../../constants/typography"
import {
  MailingTitleHolder,
  MailingContent,
  MailingInput,
} from "./mailing-list-styles"
import { Button } from "../../constants/buttons"
const MailingList = ({ title }) => {
  return (
    <>
      <MailingTitleHolder>
        <H2>{title}</H2>
      </MailingTitleHolder>

      <MailingContent
        action="https://facebook.us19.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="c45ced259329ec3d3e89ebe55" />
        <input type="hidden" name="id" value="8afc898548" />
        <MailingInput
          type="email"
          autocapitalize="off"
          autocorrect="off"
          name="MERGE0"
          id="MERGE0"
          placeholder="email address here"
        ></MailingInput>
        <Button primary={true} type="submit">
          SUBMIT
        </Button>
      </MailingContent>
    </>
  )
}

export default MailingList
