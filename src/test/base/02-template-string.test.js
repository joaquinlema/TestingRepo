import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02 tempalte base', () => {
    test('getSaludo debe retornar hola juan ', () => {
        const nombre = 'juan';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola juan');
    });

    test('getSaludo debe retornar hola ', () => {
        const nombre = '';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ');
    });

    test('getSaludo debe retornar hola carlos si no se le pasa nombre', () => {
    
        const saludo = getSaludo();

        expect(saludo).toBe('Hola carlos');
    });
    
});
