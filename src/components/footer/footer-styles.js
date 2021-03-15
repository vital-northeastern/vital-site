import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #133e6c;
  padding: 20px 100px 20px 100px;
`
export const FooterRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0 5% 0;
  flex-wrap: wrap;
`

export const FooterSubsectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  flex-wrap: nowrap;
`

export const FooterDescription = styled.p`
  width: 66%;
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
  justify-content: space-between;
  align-items: baseline;
  padding: 30px 0 30px 0;
  width: 70%;
`

export const ConnectContactText = styled.p`
  color: black;
  padding-right: 5vw;
`

export const EmailContainer = styled.div`
  flex: 1 1 70%;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const MailtoLink = styled.a`
  font-family: "URW DIN", sans-serif;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;
  text-transform: uppercase;
  min-width: 1%;
  color: blue;
  &:hover {
    color: blue;
  }
  &:focus {
    color: blue;
  }
`

export const FooterSmallCaption = styled.p`
  font-size: 14px;
  margin: 0;
  color: black;
`

export const LoveByScout = styled(FooterSmallCaption)`
  flex: 1 1 100%;
  a {
    color: black;
    text-decoration: underline;
  }
`
