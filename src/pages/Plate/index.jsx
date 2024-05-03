// import { useParams } from 'react-router-dom'
import {
  PlateContainer,
  PlateDetails,
  IngredientTagsWrapper,
  StyledButton,
  PlateFooter,
} from './styles'
import { Receipt } from 'phosphor-react'
import { CustomLink } from '../../components/CustomLink'
import { IngredientTag } from './components/IngredientTag'
import { QuantityInput } from '../../components/QuantityInput'

export function Plate() {
  const isAdmin = true
  // const params = useParams()
  // const plateId = params.id

  return (
    <PlateContainer>
      <CustomLink icon="true" text="voltar" />
      <img
        src="https://s3-alpha-sig.figma.com/img/b0c9/ae3d/7ca1a259f937ab6aebbc5ba2ffd2d4ab?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMxQKeHBLy-EuxfRATQwoWnRnO-cR77CDeLZzjjXJBxS3W-nrDwNeazhr5DRe~a4r4VTxUY5o5zlwTq1w8NWEfIqsTy5z8O3tIpAcU9EYkcnEfomaZHA~7OftRJhs3FUGaOD0AUA7qIB0Hk5IpkvkCzfrlQzkeUEDNVowf3YbznSGrZTe3MCvwpQpSrHTvtJzlvomTzcrG7LLNMQkBetFJKermUhBABSDOEL~xkTfA~Rg4oHCqYJ4lJTLfXXw5DuQ-7pzlmwo-FmDEabOSNKwIfh-~kr3FLo24DRWuHIMAJdO5ajt-Pf227-I3O4PDKTcl5ecMehggLtXGTTUfcE-Q__"
        alt=""
      />

      <PlateDetails>
        <h2>Salada Ravanello</h2>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>
        <IngredientTagsWrapper>
          <IngredientTag text="alface" />
          <IngredientTag text="cebola" />
          <IngredientTag text="pão" />
          <IngredientTag text="pepino" />
          <IngredientTag text="rabanete" />
          <IngredientTag text="tomate" />
        </IngredientTagsWrapper>
      </PlateDetails>
      <PlateFooter>
        {isAdmin ? (
          <StyledButton size="m" text="Editar prato" />
        ) : (
          <>
            <QuantityInput />
            <StyledButton size="m" icon={<Receipt />} text="Pedir - R$ 25,00" />
          </>
        )}
      </PlateFooter>
    </PlateContainer>
  )
}
