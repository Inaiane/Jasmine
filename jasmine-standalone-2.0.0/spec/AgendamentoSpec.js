describe("Agendamento", function(){
    
    var gui;
    var agenda;
    
    beforeEach(function(){
        gui = new PacienteBuilder().constroi();
        agenda = new Agendamento();
    });
    
    it("agendamento para 20 dias", function(){

        var consulta = new Consulta(gui, [], false, false, new Date(2015, 0, 1));
        var novaConsulta = agenda.para(consulta);
        
        expect(novaConsulta.getData().toString()).toEqual(new Date(2015, 0, 21).toString());
    
    });
    
    it("deve pular os finais de semanas", function(){
    
        var consulta = new Consulta(gui, [], false, false, new Date(2015, 0, 5));
        var novaConsulta = agenda.para(consulta);
        
        expect(novaConsulta.getData().toString()).toEqual(new Date(2015, 0, 26).toString());
    });
    
    
});