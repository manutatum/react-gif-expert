import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
  
  //Hook para guardar valor del Input
  const [inputValue, setInputValue] = useState('')
  
  //Evento que guarda el valor actual del input cada vez que cambie
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    //Evita refrescar la pagina
    event.preventDefault();
    //Si el valor del input sin espacios es menor o igual a uno corta la funcion
    if (inputValue.trim().length <= 1) return;
    //Si no guarda el valor en la funcion
    onNewCategory(inputValue.trim());
    //Limpia el input
    setInputValue("");
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input type="text" placeholder="Buscar GIFS" value={inputValue} onChange={onInputChange}/>
    </form>
  )
}
//Proptypes onNewCategory debe ser una funcion y sera requerida siempre
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}