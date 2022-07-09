const sayName = function (myName) { //Anonymous function
    return `Hello ${myName}`
}
console.log(sayName('fulano'))

const msg = `${sayName('beltrano')}!!!`
console.log(msg)