import { TagsWrapperContainer, Tag, NewTag } from './styles'
import { Plus, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function TagsWrapper({ ingredients, updateIngredientList }) {
  const [ingredientList, setIngredientList] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function handleDeleteIngredient(id) {
    const newIngredientList = ingredientList.filter((item) => item.id != id)
    updateIngredientList(newIngredientList)
  }

  function handleAddIngredient() {
    const newIngredientObject = {
      id: new Date(),
      name: newIngredient,
    }
    updateIngredientList((prev) => [...prev, newIngredientObject])
    setNewIngredient('')
  }

  useEffect(() => {
    setIngredientList(ingredients)
  }, [ingredients])

  return (
    <TagsWrapperContainer>
      {ingredientList.map((ingredient) => (
        <Tag key={ingredient.id}>
          <p>{ingredient.name}</p>
          <X onClick={() => handleDeleteIngredient(ingredient.id)} />
        </Tag>
      ))}

      <NewTag>
        <input
          type="text"
          placeholder="Adicionar"
          onChange={(event) => setNewIngredient(event.target.value)}
          value={newIngredient}
        />
        <Plus onClick={handleAddIngredient} />
      </NewTag>
    </TagsWrapperContainer>
  )
}
