/*********************************************************
 * Objetivo : arquivo responsável por gerar uma tabuada utilizando WHILE E FOR
 * Data: 25/02/2026
 * Autor: João Pedro
 * Versão: 1.0
 * *******************************************************/

//import da biblioteca
const  Calcular = require('./calculo.js')

//função para imprimir a tabuada
const gerarTabuadaWhile = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0 
    let resultado 

    while(cont <= 10){
    
        //Processamento
    resultado = Calcular.multiplicação(tab,cont)
    console.log(tab + 'x' + cont + '=' + resultado)
        cont = cont +1

    }
}

const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0 
    let resultado 

   
    for(let cont =0; cont<=10; cont++){
        //Processamento
    resultado = Calcular.multiplicação(tab,cont)
    console.log(tab + 'x' + cont + '=' + resultado)
        cont = cont +1
    }
    
}
gerarTabuadaFor(3)

