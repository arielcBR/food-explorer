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
  const isAdmin = false
  // const params = useParams()
  // const plateId = params.id

  return (
    <PlateContainer>
      <CustomLink icon="true" text="voltar" />
      <img
        src="https://s3-alpha-sig.figma.com/img/b0c9/ae3d/7ca1a259f937ab6aebbc5ba2ffd2d4ab?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=omeIVa-6KJHeqqDawWYkz6WNdSUBRIsCqaE0Hdbvrb6iWgvxGEAkLXAUCwDTBlR3qkgfz6cTJIkLWA3gZ4n8e4Yb1eNeXJziH5E3-oeZ83Z3QkIt-vkH-9KXXD6ldHkMvxNvlnA5jKpx5x6PvKf8ZBDpdJzx7jgMMLQ5Mtq~N4~tr-R~8uuMCo26wB4cbTtTBVc1wxtrTaPdXhZ1coUvpu50RV~467hGvBIuJ5rbhVMjX8zknr5t6jAfLq90IcMvGjAfPdUFP~-E50-03SrGXUtCfy7-lwhaAMYBahOrmgkrSf0M9hS2ML6rMqpay1IujyrSHqK~Os5Gr5G8MFU9lA__"
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
