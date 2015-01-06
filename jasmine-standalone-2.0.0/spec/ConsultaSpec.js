describe("Consulta", function(){
    
    var maria;
    
    beforeEach(function(){
        
        maria = new PacienteBuilder().constroi();
    });
    
    describe("tipos de retorno", function(){
        
        it("não deve cobrar nada se for um retorno", function(){
        
            var consulta = new Consulta(maria, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });
    
    describe("tipos de procedimentos", function(){
        
        it("deve cobrar 25 por cada procedimento comum", function(){


            var consulta = new Consulta(maria, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preço especifico dependendo do procedimento", function(){

            var consulta = new Consulta(maria, ["raio-x", "gesso"], false, false);

            expect(consulta.preco()).toEqual(55+32);
        });

        it("deve cobrar dobro por cada procedimento comum se for particular", function(){


            var consulta = new Consulta(maria, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);

        });
    });

    
});