//Curring : retornar uma função a partir de uma função
function finalPrice(tax) {
    return function(price) {
        return price * (1, tax)
    }
}

const nycFinalPrice = finalPrice(0.0955)

console.log(nycFinalPrice(25.2))
console.log(nycFinalPrice(21.5))
console.log(nycFinalPrice(23.7))