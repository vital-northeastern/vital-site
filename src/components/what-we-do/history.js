import React from "react"

const History = ({ title, historyMilestones }) => {
  return (
    <div>
      <h3>{title}</h3>
      {historyMilestones.map((milestone, index) => (
        <li>{milestone.milestoneDescription.milestoneDescription}</li>
      ))}
    </div>
  )
}

export default History
