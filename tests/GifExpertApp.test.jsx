const { render, screen, fireEvent } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe('Pruebas en el componente <GifExpertApp/>', () => {
    test('Debe de mostrar contenido en el input', () => {
        render(<GifExpertApp/>);
        const inputValue = 'Saitama'
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input,{target:{value:inputValue}});

        expect(input.value).toBe(inputValue);
        // screen.debug();
    });
    
});