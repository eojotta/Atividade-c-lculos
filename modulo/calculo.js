//Validação dos valores
function validação(valor1, valor2, operacao) {
    let n1 =        valor1.replace(',','.')
    let n2 =        valor2.replace(',','.')
    let operacaoReal = operacao
    

    //Bloqueio de Caracteres ou preenchimento vazio 
    if (n1 == '' || isNaN(n1) || n2 == '' || isNaN(n2)) {
        console.log('Erro')
        return false
    } else if (operacaoReal != 'Adição' && operacaoReal != 'Subtração' && operacaoReal != 'Multiplicação' && operacaoReal != 'Divisão') {
        console.log('ERRO:inválido')
        return false
    } else {
        return true
    }

}

function Calcular(n1, n2, operacao) {
    let valor1 = Number(n1)
    let valor2 = Number(n2)
    let operacaoReal = operacao


    //SOMA
    if (operacao == 'Adição') {
        let resultados = valor1 + valor2
        return resultados

        //SUBTRAÇÃO
    } else if (operacao == 'Subtração') {
        let resultados = valor1 - valor2
        return resultados

        //Multiplicação
    } else if (operacao == 'Multiplicação') {
        let resultados = valor1 * valor2
        return resultados

    } else if (operacao == 'Divisão') {
        let resultados = valor1 / valor2
        return resultados
    }
}





module.exports = {
    validação,
    Calcular
}