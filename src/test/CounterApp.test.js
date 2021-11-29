import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas de Counter App', () => {

    test('Debe mostrar COunterApp correctamente ', () => {

        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe mostrar 10 como default en el contador ', () => {

        const wrapper = shallow(<CounterApp />);

        const contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(10);

    });

    test('Debe mostrar 100 como valor en el contador ', () => {

        const contadorValue = 100;

        const wrapper = shallow(<CounterApp value={contadorValue} />);

        const contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(contadorValue);

    });

});
