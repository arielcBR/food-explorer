import { useState } from 'react'
import { SignInContainer, CompleteSignIn } from './styles'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { CustomLink } from '../../components/CustomLink'
import { useAuth } from '../../hooks/AuthContext'

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn(event) {
    event.preventDefault()
    signIn(email, password)
  }

  return (
    <SignInContainer>
      <Logo />
      <CompleteSignIn onSubmit={handleSignIn}>
        <div>
          <Label htmlFor="email" text="Email" />
          <Input
            name="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <Button type="submit" text="Entrar" size="m" />

        <CustomLink to="/signUp" text="Criar uma conta" />
      </CompleteSignIn>
    </SignInContainer>
  )
}
