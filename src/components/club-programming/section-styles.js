import styled from "styled-components"
import React from "react"
import { devices } from "../../constants/devices"
import { imageGradient, navyBlue } from "../../constants/colors"
import { H2 } from "../../constants/typography"
import { Button } from "../../constants/buttons"
import { Link } from "gatsby"

const Container = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-wrap: wrap;
  }
`

const TextContainer = styled.div`
  color: ${navyBlue};
  @media ${devices.mobile} {
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  @media ${devices.mobile} {
    display: flex;
    justify-content: center;
  }
  @media ${devices.laptop} {
    display: block;
  }
`

const ClubProgrammingButton = styled(Button)`
  padding: ${props => (props.morePadding ? "15px 37px" : "17px 30px")};
`

const H2Title = styled(H2)`
  margin-bottom: 0.9rem;
  @media ${devices.mobile} {
    margin-top: ${props => (props.first ? "0.85rem" : "1.4rem")};
  }
  @media ${devices.laptop} {
    margin-top: 0rem;
    ${({ lineheight }) =>
      lineheight &&
      `
  line-height: 38px;
`}
  }
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
    order: ${props => (props.right ? "1" : "")};
  }
  @media ${devices.laptop} {
    width: ${props => (props.width ? props.width : "50%")};
    order: ${props => (props.right ? "2" : "")};
    ${({ background }) =>
      background &&
      `
    background: ${imageGradient};
`}
  }
`

function returnAppropriateLink(link, title, morePadding) {
  const button = (
    <ClubProgrammingButton
      primary={true}
      aria-label={title}
      morePadding={morePadding}
    >
      {title}
    </ClubProgrammingButton>
  )
  if (link.charAt(0) === "/") {
    return <Link to={link}>{button}</Link>
  } else {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {button}
      </a>
    )
  }
}

export {
  Container,
  ButtonContainer,
  TextContainer,
  ClubProgrammingButton,
  H2Title,
  ImageContainer,
  returnAppropriateLink,
}
