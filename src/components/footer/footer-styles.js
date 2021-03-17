import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #133e6c;
  padding: 40px 100px 20px 100px;
  font-family: "Work Sans", sans-serif;
  color: white;
`
export const FooterRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: 24px;
`

export const FooterLinks = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`

export const FooterLink = styled.a`
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  text-decoration: none;
  color: white;
  display: inline-block;
  margin-top: 12px;
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
`

export const FooterDescription = styled.h3`
  width: 66%;
  font-family: "Work Sans", sans-serif;
`

export const FooterContactContainer = styled.div`
  display: flex;
  width: 100%;
`
export const FooterScroll = styled.div`
  margin-bottom: auto;
  cursor: pointer;
  align-self: flex-end;
`

export const FooterContactContainerEmail = styled(FooterContactContainer)`
  display: flex;
  width: 100%;
  align-items: baseline;
`

export const FooterSocialBlock = styled.div`
  display: flex;
  margin: 0 0 28px auto;
`

export const ConnectContactText = styled.span`
  font-family: "Work Sans", sans-serif;
  color: white;
`

export const EmailContainer = styled.span`
  color: white;
`

export const MailtoLink = styled.a`
  line-height: 20px;
  margin-left: 16px;
  text-decoration: none;
  font-family: "Work Sans", sans-serif;
  color: white;
  border-bottom: 2px solid white;
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
