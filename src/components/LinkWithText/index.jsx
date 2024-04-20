import { LinkWithTextContainer } from './styles'

export function LinkWithText({ text, ...rest }) {
  return <LinkWithTextContainer {...rest}>{text}</LinkWithTextContainer>
}
