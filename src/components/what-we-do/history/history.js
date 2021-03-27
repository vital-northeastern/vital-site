import React from "react"
import { H3, P } from "../../../constants/typography"

const History = ({ title, historyMilestones }) => {
  return (
    <>
      <H3>{title}</H3>
      {historyMilestones.map((milestone, index) => (
        <P>{milestone.milestoneDescription.milestoneDescription}</P>
      ))}
    </>
  )
}

export default History
