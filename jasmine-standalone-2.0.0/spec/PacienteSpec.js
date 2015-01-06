describe("Paciente", function(){
    
    it("calculo do imc", function(){
    
        var maria = new Paciente(maria, 21, 50, 1.60);
        
        expect(maria.imc()).toEqual(50/(1.60 * 1.60));
    });

    
});