const numbers = [1, 2, 3, 4, 5, 6]
const numbersV2 = numbers.map( el=> el * 2)
console.log(numbers, numbersV2)

const students = [
    {name: 'jake', score: 6.5},
    {name: 'Susan', score: 7.5},
    {name: 'Emma', score: 5.6},
    {name: 'Peter', score: 9.6},
]

const getScore = el=> el.score
const result = students
    .map(getScore)
    .map(Math.ceil) //arredondar para cima

console.log(students, result)