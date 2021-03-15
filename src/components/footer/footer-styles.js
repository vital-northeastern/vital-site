import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #133e6c;
  padding: 20px 100px 20px 100px;
  font-family: "Work Sans", sans-serif;
  color: white;
`
export const FooterRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const FooterLinks = styled.div`
  color: white;
  line-height: 8px;
`

export const FooterLink = styled.a`
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  text-decoration: none;
  color: white;
  &:hover {
    color: blue;
  }
  &:focus {
    color: blue;
  }
`

export const FooterSubsectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  flex-wrap: nowrap;
`

export const FooterDescription = styled.h3`
  width: 66%;
  font-family: "Work Sans", sans-serif;
  margin-top: 20px;
`

export const FooterContactContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: baseline;
  flex-wrap: nowrap;
`

export const FooterContactContainerEmail = styled(FooterContactContainer)`
  width: 70%;
  justify-content: flex-start;
  display: flex;
`

export const FooterSocialBlock = styled.div`
  display: flex;
  float: right;
  justify-content: space-between;
  align-items: baseline;
  padding: 30px 0 30px 0;
  width: 70%;
`

export const ConnectContactText = styled.p`
  font-family: "Work Sans", sans-serif;
  color: white;
  padding-right: 5vw;
  font-size: 13px;
`

export const EmailContainer = styled.div`
  flex: 1 1 70%;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
`

export const MailtoLink = styled.a`
  font-family: "Work Sans", sans-serif;
  font-size: 13px;
  line-height: 27px;
  min-width: 1%;
  color: white;
  &:hover {
    color: blue;
  }
  &:focus {
    color: blue;
  }
`

export const FooterSmallCaption = styled.span`
  font-size: 14px;
  margin: 0;
  color: white;
`

export const LoveByScout = styled(FooterSmallCaption)`
  flex: 1 1 100%;
  float: right;
  a {
    color: white;
    text-decoration: underline;
  }
`
