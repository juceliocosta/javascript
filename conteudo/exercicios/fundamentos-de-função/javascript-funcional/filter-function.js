const numbers = [1, 2, 3, 4, 5, 6]
const even = el=> el % 2 === 0
console.log(numbers.filter(even))

const students = [
    {name: 'jake', score: 6.5},
    {name: 'Susan', score: 9.5},
    {name: 'Emma', score: 8.6},
    {name: 'Peter', score: 9.6},
]

const greatStudent = student=> student.score >= 9
console.log(students.filter(greatStudent), students)
