import React from "react"

const ApplicationInfo = ({ applicationEmail, deadlineForApplication }) => {
  return (
    <>
      <h4>{applicationEmail}</h4>
      <p>{deadlineForApplication}</p>
    </>
  )
}

export default ApplicationInfo
