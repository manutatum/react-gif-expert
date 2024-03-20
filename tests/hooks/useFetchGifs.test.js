import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el Hook de useFetchGIfs', () => {
    test('Debe de regresar el estado inicial', () => {
        //funcion propia de testing library
        //result devuelve el resultado una vez montado
        const {result} = renderHook(()=>useFetchGifs('One Punch'));
        const {images,isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('Debe de retornar un array de imagenes y isLoading false', async() => {
        const {result} = renderHook(()=>useFetchGifs('One Punch'));
        
        //Esta funcion es una promesa por lo tanto se le pone el async/await
        //Espera hasta que haya imagenes
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        //Una vez haya imagenes desestructura el resultado
        const {images,isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});