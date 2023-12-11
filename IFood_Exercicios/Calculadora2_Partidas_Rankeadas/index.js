function partidasRankeadas (vitorias, derrotas){
        let resultado = vitorias - derrotas
     return resultado
     }
   
function saldo(){
    let nivel= ""

    if (saldoVitorias<= 10) {
        nivel = "Ferro"

    } else if (saldoVitorias<= 20) {      
        nivel = "Bronze"

    } else if (saldoVitorias<= 50) {
        nivel = "Prata"
        
    } else if (saldoVitorias<= 80) {
        nivel = "Ouro"

    } else if (saldoVitorias <= 90) {
        nivel = "Diamante"

    } else if (saldoVitorias <= 100) {
        nivel = "Lendário"

    } else{
        nivel = "Imortal"
    }
    return 'O Herói está com saldo de ' + saldoVitorias + ' e está no nivel ' + nivel
}
let saldoVitorias = partidasRankeadas(100, 10)
console.log(saldo())

   