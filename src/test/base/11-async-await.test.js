import { getImagen } from "../../base/11-async-await";
import '@testing-library/jest-dom';

describe('pruebas async await', () => {

    test('should not work', async () => {

        const url = await getImagen();

        expect(url).toBe('No existe');
    });

});
