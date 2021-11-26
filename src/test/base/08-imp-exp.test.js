import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
import '@testing-library/jest-dom';

describe('Pruebas 08-imp-exp test', () => {
    test('debe devolver el heroe por id', () => {
        const id = 1;

        const heroeTest = getHeroeById(id);
        const heroe = heroes.find( (heroe) => heroe.id === id );
        
        expect(heroeTest).toEqual(heroe);
    });

    test('debe devolver undefined el heroe por id', () => {
    
        const heroeTest = getHeroeById();
        
        expect(heroeTest).toEqual(undefined);
    });
    
    // console.log( getHeroesByOwner('Marvel') );

    test('debe devolver [] el heroe por owner', () => {
    
        const heroeTest = getHeroesByOwner();
        
        expect(heroeTest).toEqual([]);
    });

    test('debe devolver solo Marvel el heroe por owner', () => {
    
        const owner = 'Marvel';
        const heroeTest = getHeroesByOwner(owner);
        const marvelHeroes = heroes.filter( (heroe) => heroe.owner === owner );
        
        expect(heroeTest).toEqual(marvelHeroes);
    });

    test('debe devolver solo DC el heroe por owner', () => {
    
        const owner = 'DC';
        const heroeTest = getHeroesByOwner(owner);
        const marvelHeroes = heroes.filter( (heroe) => heroe.owner === owner );
        
        expect(heroeTest).toEqual(marvelHeroes);
    });

    test('debe devolver TOTAL Marvel el heroe por owner', () => {
    
        const owner = 'Marvel';
        const heroeTest = getHeroesByOwner(owner);
        
        expect(heroeTest.length).toBe(2);
    });

    test('debe devolver TOTAL DC el heroe por owner', () => {
    
        const owner = 'DC';
        const heroeTest = getHeroesByOwner(owner);
        
        expect(heroeTest.length).toBe(3);
    });

});