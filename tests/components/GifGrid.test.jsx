import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Hace que dicha funcion este mockeada
jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en el componente <GifGrid/>', () => {
    
    const category = 'One punch'

    test('Debe de mostrar el Loading inicialmente', () => {
        
        //Da valores a la funcion mockeada
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => {
        
        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url:'Prueba.jpg'
            },
            {
                id:'DEF',
                title:'Pepe',
                url:'Prueba.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        });
        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});