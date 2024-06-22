import { useState } from 'react'
import { SignUpContainer, CompleteSignUp } from './styles'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { CustomLink } from '../../components/CustomLink'
import { useAuth } from '../../hooks/AuthContext'

export function SignUp() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { signUp } = useAuth()

  function handleSignUp(event) {
    event.preventDefault()
    signUp(name, email, password)
  }

  return (
    <SignUpContainer>
      <Logo />

      <CompleteSignUp onSubmit={handleSignUp}>
        <h2>Crie sua conta</h2>
        <div>
          <Label htmlFor="name" text="Seu nome" />
          <Input
            name="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

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

        <Button 
          as="button" 
          type="submit" 
          text="Criar Conta" 
          variant="normal" 
          className="button-submit"  
        />

        <CustomLink to="/" text="Já tenho uma conta" />
      </CompleteSignUp>
    </SignUpContainer>
  )
}
