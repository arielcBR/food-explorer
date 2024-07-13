import { useState, useEffect } from 'react'
import { FormContainer, InputWrapper } from './styles'
import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import { Select } from '../Select'
import { Textarea } from '../Textarea'
import { TagsWrapper } from '../TagsWrapper'
import { Label } from '../Label'
import { FileInput } from '../FileInput'
import { updateDish, createDish } from '../../services/api'

export function Form({ id, dish, page, setButtonEnable }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [imageFile, setImageFile] = useState('')

  function updateIngredientList(newList) {
    setIngredients(newList)
  }

  function updateCategory(newCategory){
    setCategory(newCategory)
  }

  function updateFileInput(imageSelected){
    setImageFile(imageSelected)
  }

  async function handleFormCreate(event){
    event.preventDefault()

    const readyToCreate = confirm('Tem certeza que quer cadastrar?')

    if(readyToCreate) {
      const dish = {
        name,
        category,
        price,
        description,
        ingredients
      }

      const response = await createDish(dish, imageFile)

      if(response.status === 200){
        alert('Prato/Drink cadastrado com sucesso!')
        navigate('/')
      }
      else(
        alert('O cadastro falhou!')
      )
    }
  }

  async function handleFormUpdate(event){
    event.preventDefault()

    const readyToUpdate = confirm('Tem certeza que quer seguir com a atualização?')

    if(readyToUpdate) {
      const dishUpdated = {
        name,
        category,
        price,
        description,
        ingredients
      }
      const response = await updateDish(dish.id, dishUpdated, imageFile)

      if(response.status === 200){
        alert('Prato/Drink atualizado com sucesso!')
        navigate('/')
      }
    }
  }

  useEffect(() => {
    if(dish) {
      setName(dish.name || '')
      setCategory(dish.category || '')
      setPrice(dish.price || '')
      setDescription(dish.description || '')
      setIngredients(dish.ingredients || [])
    }
  }, [dish])

  useEffect(() => {
    const isFormInvalid = !name || !category || !price || description.length <= 15
    setButtonEnable(isFormInvalid)
  }, [name, category, price, description, setButtonEnable])

  return (
    <FormContainer id={id} onSubmit={page === 'update' ? handleFormUpdate : handleFormCreate}>
      <div className="wrapper-input-top">
        <InputWrapper>
          <Label text="Imagem do prato" htmlFor="imagePlate" />
          <FileInput name="imagePlate" text="Selecione imagem" updateFileInput={updateFileInput} />
        </InputWrapper>

        <InputWrapper>
          <Label text="Nome" htmlFor="name" />
          <Input 
            name="name" 
            placeholder="Ex.: Salada Ceasar" 
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </InputWrapper>

        <InputWrapper>
          <Label text="Categoria" htmlFor="category" />
          <Select name="category" category={category} updateCategory={updateCategory} />
        </InputWrapper>
      </div>

      <div className="wrapper-input-middle">
        <InputWrapper>
          <Label text="Ingredientes" htmlFor="ingredients" />
          <TagsWrapper ingredients={ingredients} updateIngredientList={updateIngredientList} />
        </InputWrapper>

        <InputWrapper>
          <Label text="Preço" htmlFor="price" />
          <Input 
            type="number" 
            name="price" 
            placeholder="R$ 00,00" 
            onChange={(event) => setPrice(event.target.value)}
            value={price}  
          />
        </InputWrapper>
      </div>

      <div>
        <InputWrapper>
          <Label text="Descrição" htmlFor="description" />
          <Textarea
            name="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(event) => setDescription(event.target.value)}
            value={description} 
          />
        </InputWrapper>
      </div>
    </FormContainer>
  )
}
