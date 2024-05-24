import { SignUpContainer, CompleteSignUp } from './styles'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { CustomLink } from '../../components/CustomLink'

export function SignUp() {
  return (
    <SignUpContainer>
      <Logo />

      <CompleteSignUp>
        <h2>Crie sua conta</h2>
        <div>
          <Label htmlFor="name" text="Seu nome" />
          <Input
            name="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" text="Email" />
          <Input
            name="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" text="Senha" />
          <Input
            name="password"
            type="password"
            minLength="6"
            placeholder="No mínimo 6 caracteres"
            required
          />
        </div>

        <Button type="submit" text="Criar Conta" size="m" />

        <CustomLink to="/" text="Já tenho uma conta" />
      </CompleteSignUp>
    </SignUpContainer>
  )
}
