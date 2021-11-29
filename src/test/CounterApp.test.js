import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas de Counter App', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar COunterApp correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe mostrar 10 como default en el contador ', () => {

        const contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(10);

    });

    test('Debe mostrar 100 como valor en el contador ', () => {

        const contadorValue = 100;

        const wrapper = shallow(<CounterApp value={contadorValue} />);

        const contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(contadorValue);

    });

    test('Debe mostrar 11 como contador +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(11);

    });

    test('Debe mostrar 9 como contador -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(9);

    });

    test('Debe reseta contador a 10', () => {

        wrapper.find('button').at(0).simulate('click');
        
        let contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(11);

        wrapper.find('button').at(1).simulate('click');

        contador = Number(wrapper.find('h2').text().trim());

        expect(contador).toBe(10);

    });

});
