function logParams(a, b, c = 0) {//definindo um valor padrão
    console.log(a, b, c)
}
logParams(1, 2, 3, 4, 5) //ignora o excesso
logParams(1, 2) //assume o valor padrão
logParams(1)//atribui undefined aos que faltam

function logNums(nums) {
    for (let n of nums) console.log(n) //of: item , in: index
}
logNums([10, 20, 30, 40])//passando array

//sreap/rest ...
function logNums(...nums) {
    for (let n of nums) console.log(n)
}
logNums(10, 20, 30, 40, 50, 60)//passando parametros 