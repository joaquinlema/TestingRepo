describe('Pruebas de demo', () => {
    
    test('should do what its expected', () => {
        const isActive = true;
    
        if(!isActive)
            throw new Error('ERROR ');
    });
    
    test('should be equal', () => {
        //init
        const mensaje = 'hola';
    
        //estimulo comparacion
        const mensaje2 = `hola`;
    
        //observacion
    
        expect(mensaje).toBe(mensaje2); //compara por equidad ===
    });
    
    test('should not be equal', () => {
        //init
        const mensaje = 'hola';
    
        //estimulo comparacion
        const mensaje2 = `hola!`;
    
        //observacion
    
        expect(mensaje).not.toBe(mensaje2); //compara por equidad ===
    });
});


