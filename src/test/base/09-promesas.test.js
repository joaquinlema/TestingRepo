import { getHeroeByIdAsync } from "../../base/09-promesas";
import '@testing-library/jest-dom';
import heroes from "../../data/heroes";

describe('Prubea de promesas', () => {
    
    //con poner done evalua ante async simpre ponerlo
    test('should getHeroeByIdAsync retornar un heroe async', (done) => {
   
        const id = 1;
        
        getHeroeByIdAsync(id)
        .then(heroe => {
            //como las pruebas son sincronas esto pasa aunqeu no deberia
            expect(heroe).toBe(heroes[0]);
            done();//avisamos que termino el proceso async
        });
    });

    test('should getHeroeByIdAsync retornar error si un heroe que nmo existe', (done) => {
   
        const id = 10;
        
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
    
});
