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
  margin-top: 10px;
`

export const FooterContactContainer = styled.div`
  display: flex;
  width: 100%;
  float: right
  align-items: baseline;
  flex-wrap: nowrap;
`

export const FooterContactContainerEmail = styled(FooterContactContainer)`
display: flex;
width: 100%;
float: right
align-items: baseline;
padding-left: 290px;
`

export const FooterSocialBlock = styled.div`
  display: flex;
  float: right;
  align-items: baseline;
  padding: 0;
  padding-left: 380px;
  padding-top: 100px;
  width: 100%;
`

export const ConnectContactText = styled.span`
  font-family: "Work Sans", sans-serif;
  color: white;
  padding-right: 3vw;
  font-size: 13px;
`

export const EmailContainer = styled.span`
  flex: 1 1 70%;
  width: 100%;
  color: white;
`

export const MailtoLink = styled.a`
  font-family: "Work Sans", sans-serif;
  font-size: 13px;
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
