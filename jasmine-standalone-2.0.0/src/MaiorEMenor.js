function MaiorEMenor(){
    var maior;
    var menor;

    clazz = {
        encontra: function(nums){
            maior = Number.MIN_VALUE;
            menor = Number.MAX_VALUE;

            nums.forEach(function(num) {
                         if(num < menor) menor = num;
                         if (num > maior) maior = num;
            });
        },
        pegaMaior: function(){ 
            return maior;
        },
        pegaMenor: function(){
            return menor;
        }
    };
    return clazz;
}