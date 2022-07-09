//útil para definir algumas variáveis dentro de um escopo
(function () {
    let d = 10
    console.log(d)
})();

(() => console.log(1))(); //arrow function