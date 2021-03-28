import React from "react"
import { HLower, H3, P } from "../../../constants/typography"

const History = ({ title, historyMilestones }) => {
  return (
    <>
      <H3>{title}</H3>
      {historyMilestones.map((milestone, index) => (
        <>
          <HLower>{milestone.title}</HLower>
          <P>{milestone.milestoneDescription.milestoneDescription}</P>
        </>
      ))}
    </>
  )
}

export default History
