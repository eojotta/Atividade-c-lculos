//Validação dos valores
function validação(valor1, valor2, operacao) {
    let n1 =        valor1.replace(',','.')
    let n2 =        valor2.replace(',','.')
    let operacaoReal = operacao
    

    //Bloqueio de Caracteres ou preenchimento vazio 
    if (n1 == '' || isNaN(n1) || n2 == '' || isNaN(n2)) {
        console.log('Erro: Falta de caracteres ou caracteres inválidos')
        return false
    } else if (operacaoReal != 'Adição' && operacaoReal != 'Subtração' && operacaoReal != 'Multiplicação' && operacaoReal != 'Divisão') {
        console.log('ERRO:inválido')
        return false
    } else {
        return true
    }

}

function Calcular(n1, n2, operacao) {
    let valor1 = Number(n1.replace(',','.'))
    let valor2 = Number(n2.replace(',','.'))
    let operacaoReal = operacao


    //SOMA
    if (operacao == 'Adição') {
        let resultados = valor1 + valor2
        return resultados.toFixed(2)

        //SUBTRAÇÃO
    } else if (operacao == 'Subtração') {
        let resultados = valor1 - valor2
        return resultados.toFixed(2)

        //Multiplicação
    } else if (operacao == 'Multiplicação') {
        let resultados = valor1 * valor2
        return resultados.toFixed(2)

    } else if (operacao == 'Divisão') {
        let resultados = valor1 / valor2
        return resultados.toFixed(2)
    }
}


module.exports = {
    validação,
    Calcular
}

//A FUNÇÃO CALCULAR PRECISA CHAMAR A VALIDAÇÃO DA , E DO . 
// CRIAR OUTRA FUNÇÃO PARA VALIDAR O . E ,