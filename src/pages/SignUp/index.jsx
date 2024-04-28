import { SignUpContainer, CompleteSignUp } from './styles'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { LinkWithText } from '../../components/LinkWithText'

export function SignUp() {
  return (
    <SignUpContainer>
      <Logo variant="header" />
      <CompleteSignUp>
        <Input
          labelText="Seu nome"
          name="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          minLength="2"
          required
        />
        <Input
          labelText="Email"
          name="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          required
        />
        <Input
          labelText="Senha"
          name="password"
          type="password"
          minLength="6"
          placeholder="No mínimo 6 caracteres"
          required
        />

        <Button type="submit" text="Criar Conta" size="m" />

        <LinkWithText to="/signIn" text="Já tenho uma conta" />
      </CompleteSignUp>
    </SignUpContainer>
  )
}
