import { LabelContainer } from './styles'

export function Label({ text, htmlFor }) {
  return <LabelContainer htmlFor={htmlFor}>{text}</LabelContainer>
}
