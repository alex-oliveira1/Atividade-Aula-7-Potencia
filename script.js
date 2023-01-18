function potencia(numero, expoente){
    let resultado=numero;
    if (expoente<0){
    for(let i=expoente; i<-1;i++){
        resultado*=numero;
    }
    }
    else{
    for(let i=1; i<expoente;i++){
        resultado *=numero;
    }
    }    
    if (expoente===0 && numero===0){
        return "não definido";
    }
    else if (expoente===0 && numero!==0){
        return 1;
    }
    else if (expoente<0){
        return "1/"+resultado;
    }
    

    return resultado;
}
alert(potencia(3,-2));