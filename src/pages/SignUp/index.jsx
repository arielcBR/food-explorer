import { SignUpContainer, CompleteSignUp } from './styles'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <SignUpContainer>
      <Logo />
      <CompleteSignUp>
        <Input
          labelText="Seu nome"
          name="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          required
          errorMessage=""
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
          placeholder="No mínimo 6 caracteres"
          required
        />

        <Button text="Criar Conta" />
      </CompleteSignUp>
    </SignUpContainer>
  )
}
