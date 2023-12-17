//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
let posicaoInicial = input("Posisao Inicial : ");
let totalPassos = input("Total de Passos : ");
let inicial = gets(posicaoInicial);
let passos = gets(totalPassos);


let posicaoFinal = parseInt(inicial) + parseInt(passos);


console.log("Posicao final do heroi:", posicaoFinal);