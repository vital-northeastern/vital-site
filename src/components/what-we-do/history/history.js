import React from "react"

const History = ({ title, historyMilestones }) => {
  return (
    <>
      <h3>{title}</h3>
      {historyMilestones.map((milestone, index) => (
        <li>{milestone.milestoneDescription.milestoneDescription}</li>
      ))}
    </>
  )
}

export default History
