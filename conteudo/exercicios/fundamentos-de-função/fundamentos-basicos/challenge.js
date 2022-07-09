/*function range (inicio, fim, intervalo=1){
    let sequencia = []
    function sequenciaMenorMaior(n1, n2, n3) {
        for (n1; n1 <= n2; n1 += n3) {
            sequencia.push(n1)
        }
        return sequencia
    }
    function sequenciaMaiorMenor(n1, n2, n3) {
        for (n1; n1 >= n2; n1 -= n3) {
            sequencia.push(n1)
        }
        return sequencia
    }

    if (fim == undefined) return [inicio]
    else if (inicio < fim) sequenciaMenorMaior(inicio, fim, intervalo)
    else if (inicio > fim) sequenciaMaiorMenor(inicio, fim, intervalo) 
}*/

function range (n1, n2, s=1) {
    const inicio = n2 === undefined ? 1 : n1 //se n2 indefinido irá valer 1
    const fim = n2 === undefined ? n1 : n2 //se n2 != indefinido irá valer n2
    const step = inicio <= fim ? Math.abs(s) : - Math.abs(s) //valor |absoluto|
    const nums = []

    for (let i = inicio; inicio <= fim ? i <= fim : i >= fim; i += step ) {
        nums.push(i)
    }
    return nums
}

console.log(range(7, -4, 3))
console.log(range(1, 4))
console.log(range(5))