import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) =>{
    //Le llega el valor de la nueva categori
    //Comprueba que no exista la categoria, si existe se sale
    if(categories.includes(newCategory))return;
    //Si no existe la añade al principio
    setCategories([newCategory,...categories]); 
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      {/* FORMULARIO */}
      <AddCategory onNewCategory = {onAddCategory}/>

      {/* Lista de las categorias */}
      <ol>
        {
          categories.map((category)=>(
            //Crea un grid por cada categoria que haya introducida
            <GifGrid key={category} category={category}/>
          ))
        }
      </ol>
    </>
  )
}
