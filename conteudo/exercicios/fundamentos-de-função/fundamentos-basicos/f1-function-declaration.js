//https://www.youtube.com/watch?v=W3f6hiTLipc

function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello('Fulano')

function sayHello(name='Sicrano') {
    return name
}
console.log(sayHello())
