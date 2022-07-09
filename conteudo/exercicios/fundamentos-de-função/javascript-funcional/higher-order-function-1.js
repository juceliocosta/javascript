//no javascript é possível passar funções como argumentos para outras funções

function run(fn) { //espera-se uma função como parâmetro
    fn()
}

function sayHello() {
    console.log('Hello!!!')
}

run(sayHello) //passando a função sayHello por referência sem invocá-la

run(()=>{ //passando uma função anônima diretamente por parâmetro
    console.log('run!!!')
})