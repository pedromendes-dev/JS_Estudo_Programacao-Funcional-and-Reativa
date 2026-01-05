// 3. Funções de Alta Ordem:


// Funções que recebem ou retornam outras funções

// 1. Recebe função como parâmetro
function executar3Vezes(funcao, valor) {
    let resultado = valor;
    for (let i = 0; i < 3; i++) {
        resultado = funcao(resultado);
    }
    return resultado;
}

const dobrar = x => x * 2;
console.log(executar3Vezes(dobrar, 2));  // 16 (2→4→8→16)

// 2. Retorna função
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const triplicar = criarMultiplicador(3);
console.log(triplicar(5));  // 15