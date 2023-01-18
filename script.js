function potencia(numero, expoente){
    
    if (expoente===0){
        return 1;
    }
    let resultado= numero;
    for(let i=1; i<expoente;i++){
        resultado *=numero;
    }
    return resultado;
}
alert(potencia(5,0));