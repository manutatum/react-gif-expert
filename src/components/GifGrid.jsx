import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

//Recibe la categoria
export const GifGrid = ({category}) => {

  // Custom Hook
  const { images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        // Si isLoading es true, es decir esta cargando las imagenes mostrara Cargando...
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) =>(
            //Inserta un item de imagen por cada imagen que haya
            <GifItem key={image.id} {...image}/>
          ))
        }
      </div>
    </>
  )
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}