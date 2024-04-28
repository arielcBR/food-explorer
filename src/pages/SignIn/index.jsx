import { SignUpContainer, CompleteSignUp } from '../SignUp/styles'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { LinkWithText } from '../../components/LinkWithText'

export function SignIn() {
  return (
    <SignUpContainer>
      <Logo variant="header" />
      <CompleteSignUp>
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

        <Button type="submit" text="Entrar" size="m" />

        <LinkWithText to="/signUp" text="Criar uma conta" />
      </CompleteSignUp>
    </SignUpContainer>
  )
}
