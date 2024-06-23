import {
  PlateContainer,
  PlateDetails,
  IngredientTagsWrapper,
  PlateFooter,
} from './styles'
import { Receipt } from 'phosphor-react'
import { CustomLink } from '../../components/CustomLink'
import { IngredientTag } from './components/IngredientTag'
import { Button } from '../../components/Button'
import { QuantityInput } from '../../components/QuantityInput'
import { useAuth } from '../../hooks/AuthContext'

export function Plate() {
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false
  
  // mock
  const tags = ['alface', 'cebola', 'pão', 'pepino', 'rabanete', 'tomate', 'molho']

  return (
    <PlateContainer>
      <CustomLink to='/' icon="true" text="voltar" />
      <main>
        <img
          src="https://s3-alpha-sig.figma.com/img/b0c9/ae3d/7ca1a259f937ab6aebbc5ba2ffd2d4ab?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOOJ1b3kApnWabHbl-gOYFASyQBsUsIGgX2RjmmdfnhYYCPKSfVw~qdsTouPk1VvsqsaK52~WL~sPBmea8PPx41rHnRpB~mw4yQXrunY3-gDbqsbzlxcrlkuZ9xC6o1yAiFJVkoBNg5WB9q9DUSq4EGgXKPpSFDpVNbDsVCOacclxl-~sNL~GVO3Q1b9m6xWA8u2OyZenUsvZcJE8JFqqdivyTlyFDS8Viv4nN0co~WiVR82NoBVZCjczrHq~5mOEdR5yNt~yKaBDBMPQ1MDwMpIBgodiwLybfmxiXgDuphAjtx7wgIA4nbVulERh~SsNfpHZRGhDVT1VidPdGQxbQ__"
          alt=""
        />

        <div>
          <PlateDetails>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <IngredientTagsWrapper>
              {tags.map(tag => <IngredientTag text={tag} />)}
            </IngredientTagsWrapper>
          </PlateDetails>
          <PlateFooter>
            {isAdmin 
              ? <Button as="button" text="Editar prato" />
              : (
              <div>
                <QuantityInput />
                <Button icon={<Receipt />} text="Pedir - R$25,00" />
              </div>
            )}
          </PlateFooter>
        </div>
      </main>
    </PlateContainer>
  )
}
