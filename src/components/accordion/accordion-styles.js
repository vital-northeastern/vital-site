import styled from "styled-components"
import { offWhite } from "../../constants/colors"
import { HName, P } from "../../constants/typography"

const AccordionItem = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  &:nth-child(1) {
    border-top: none;
  }
`

const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 1em;
`

const Title = styled(HName)`
  margin-bottom: 0;
`

const Expander = styled.div`
  font-size: 1.3em;
`

const AccordionContent = styled.div`
  background: ${offWhite};
  padding: 1.5em 1em;
`

const AccordionBlurb = styled(P)`
  margin-bottom: 0;
`

export {
  AccordionItem,
  AccordionTitle,
  Title,
  Expander,
  AccordionContent,
  AccordionBlurb,
}
