import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas primera app react', () => {
    // pruebas viejas de jest sin enzime
    // test('debe mostrar el titulo y subtitulo', () => {

    //     const saludo = 'hola joaco';
    //     const subtitulo= 'Soy un subtitulo';

    //     const {getByText} = render(<PrimeraApp saludo='hola joaco'/>);

    //     expect(getByText(saludo)).toBeInTheDocument();
    //     expect(getByText(subtitulo)).toBeInTheDocument();
    // });

    test('debe mostrar titulo enzime ', () => {

        const saludo = 'hola joaco123';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar subtitulo enzime ', () => {

        const saludo = 'hola joaco123';
        const subtitulo = 'algo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textParrafo = wrapper.find('p').text();
        console.log(textParrafo);

        expect(textParrafo).toBe(subtitulo);
    });

});
