import { retornaArreglo } from "../../base/07-deses-arr";
import '@testing-library/jest-dom';

describe('pruebas de 07', () => {
    test('debe retornar string y numero', () => {
       const [letras, numeros] = retornaArreglo();
       
       expect(letras).toBe('ABC');
       expect(typeof letras).toBe('string');

       expect(numeros).toBe(123);
       expect(typeof numeros).toBe('number');
    });
    
});
