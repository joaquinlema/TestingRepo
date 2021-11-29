import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas primera app react', () => {

    test('debe mostrar el titulo y subtitulo', () => {

        const saludo = 'hola joaco';

        const {getByText} = render(<PrimeraApp saludo='hola joaco'/>);

        expect(getByText(saludo)).toBeInTheDocument();
    });

});
