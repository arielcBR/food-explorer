import { MethodOfPaymentContainer } from './styles'
import { CreditCard } from 'phosphor-react'
import PixLogo from '../../../../assets/pix-logo.svg'
import QrCode from '../../../../assets/qr-pix.svg'

export function MethodOfPayment() {
  return (
    <MethodOfPaymentContainer>
      <div>
        <div className="clicked">
          <img src={PixLogo} alt="logo pix" />
          <span>PIX</span>
        </div>
        <div>
          <CreditCard />
          <span>Crédito</span>
        </div>
      </div>
      <div>
        <img src={QrCode} alt="" />
      </div>
    </MethodOfPaymentContainer>
  )
}
