import {
  MethodOfPaymentContainer,
  CreditCardForm,
  InputWrapper,
} from './styles'
import { CreditCard, Receipt } from 'phosphor-react'
import PixLogo from '../../../../assets/pix-logo.svg'
import QrCode from '../../../../assets/qr-pix.svg'
import { Button } from '../../../../components/Button'
import { useState } from 'react'

export function MethodOfPayment() {
  const [creditNumber, setCreditNumber] = useState('')
  const [expireNumber, setExpireNumber] = useState('')
  const [securityNumber, setSecurityNumber] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('initial')

  const enable = !creditNumber || !expireNumber || !securityNumber

  const handlePaymentChange = (newMethod) => {
    if (newMethod !== paymentMethod) {
      setPaymentMethod(newMethod)
    }
  }

  const isPixSelected = paymentMethod === 'pix'
  const isCreditCardSelected = paymentMethod === 'creditcard'

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <MethodOfPaymentContainer>
      <div>
        <div
          className={isPixSelected ? 'clicked' : ''}
          onClick={() => handlePaymentChange('pix')}
        >
          <img src={PixLogo} alt="logo pix" />
          <span>PIX</span>
        </div>

        <div
          className={isCreditCardSelected ? 'clicked' : ''}
          onClick={() => handlePaymentChange('creditcard')}
        >
          <CreditCard />
          <span>Crédito</span>
        </div>
      </div>

      <div>
        {!isPixSelected && !isCreditCardSelected && (
          <div>Selecione o Método de pagamento</div>
        )}

        {isPixSelected && <img src={QrCode} alt="" />}

        {isCreditCardSelected && (
          <CreditCardForm>
            <InputWrapper>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                maxLength="16"
                placeholder="0000 0000 0000 0000"
                onChange={(event) => setCreditNumber(event.target.value)}
                value={creditNumber}
                required
              />
            </InputWrapper>
            <div>
              <InputWrapper>
                <label htmlFor="expireNumber">Validade</label>
                <input
                  type="number"
                  name="expireNumber"
                  id="expireNumber"
                  maxLength="4"
                  placeholder="04/25"
                  onChange={(event) => setExpireNumber(event.target.value)}
                  value={expireNumber}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="securityNumber">CVC</label>
                <input
                  type="number"
                  name="securityNumber"
                  id="securityNumber"
                  maxLength="3"
                  placeholder="000"
                  onChange={(event) => setSecurityNumber(event.target.value)}
                  value={securityNumber}
                  required
                />
              </InputWrapper>
            </div>
            <Button
              as="button"
              icon={<Receipt />}
              text="Finalizar pagamento"
              onClick={handleSubmit}
              disabled={enable}
            />
          </CreditCardForm>
        )}
      </div>
    </MethodOfPaymentContainer>
  )
}
