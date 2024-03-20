import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    //Guardamos el valor de las imagenes, al principio sera un array vacio
    const [images, setImages] = useState([]);
    //Guardamos el valor del Loading al principio sera true
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        //Guarda las imagenes que sacamos de la funcion getGifs
        const newImages = await getGifs(category);
        //Le asignamos esas imagenes
        setImages(newImages);
        //Cambiamos el valor del loading
        setIsLoading(false);
    }

    //Este Hook hace que solo ejecute el getImages la primera vez cuando se crea el componente
    useEffect(() => {
        getImages();
    },[]);

  //Este Hook devuelve el array de imagenes y el estado de la carga de ellas
    return {
    images,
    isLoading
  }
}
