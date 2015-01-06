function PacienteBuilder(){
    var nome = "maria";
    var idade = 21;
    var peso = 52;
    var altura = 1.60;
    
    clazz = {
        
        constroi: function(){
            return Paciente(nome, idade, peso, altura);
        },
        comIdade: function(valor){
            idade = valor;
            return this;
        },
        comPeso: function(valor){
            peso = valor;
            return this;
        }
    };
    return clazz;
}