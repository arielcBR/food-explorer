import { SignInContainer, CompleteSignIn } from './styles'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { CustomLink } from '../../components/CustomLink'

export function SignIn() {
  return (
    <SignInContainer>
      <Logo />
      <CompleteSignIn>
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

        <Button type="submit" text="Entrar" size="m" />

        <CustomLink to="/signUp" text="Criar uma conta" />
      </CompleteSignIn>
    </SignInContainer>
  )
}
