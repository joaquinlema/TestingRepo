import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom';

describe('Pruebas de funciones 05', () => {
    test('get user should return a diff obj', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'nombre'
        }

        const user = getUser();

        expect(userTest).not.toBe(user);
    });
    
    test('get user should return a same obj', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(userTest).toEqual(user);
    });

    test('get getUsuarioActivo should return a same obj', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }

        const nombre = 'El_Papi1502';

        const user = getUsuarioActivo(nombre);

        expect(userTest).toEqual(user);
    });

    test('get getUsuarioActivo should return a undefined name', () => {
    
        const user = getUsuarioActivo();

        expect(user.username).toBe(undefined);
    });

});
