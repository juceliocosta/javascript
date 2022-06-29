function verificar() {
    const idade = getIdade('ano') //true: String idade. False: 0
    const sexo = getSex('sexo')
    const view = document.querySelector("#view")
    const faixaEtaria = getFaixaEtaria(idade); 
    const emoji = getEmoji(faixaEtaria, sexo);

    if (Number(idade) < 1) {
        alert("[Erro] verifique os dados e tente novamente!")
    } else {
        let imagem = document.querySelector("#imagem")
        imagem.style.fontSize = "5em"
        imagem.style.textAlign = "center"
        imagem.innerHTML = emoji
    }

    view.innerHTML = `Idade: ${idade} <br>Gênero: ${sexo}`
}

//************* Funções Abstratas *************/
function getIdade(id) {
    /*  param: string. 
    se válido: retorna a idade do tipo Number.
    se não: retorna 0   */
    const data = new Date()
    const anoAtual = data.getFullYear()
    const formAno = document.querySelector(`#${id}`)

    //operador ternário: se true: idade. se false: 0
    return (formAno.value > 0 && Number(formAno.value) < anoAtual) ? (anoAtual - Number(formAno.value)) : 0;
}

function getSex(name) {
    const formSexo = document.querySelectorAll(`input[name="${name}"]`)
    return (formSexo[0].checked) ? "M" : "F"
}

function getFaixaEtaria(idade) {
    if (idade > 0 && idade <= 5) return 1; 
    if (idade > 5 && idade <= 16) return 2;
    if (idade > 16 && idade <= 26) return 3;
    if (idade > 26 && idade <= 60) return 4;
    if (idade > 60 ) 5; //5 16 26 60 > 
}

function getEmoji(faixaEtaria, sexo) {
    if (sexo == 'M'){
        switch (Number(faixaEtaria)) {
            case 1: return "👶"; break;
            case 2: return "👦"; break;
            case 3: return "🧑"; break;
            case 4: return "👨"; break;
            case 5: return "👨‍🦳"; break;
        }
    } else if (sexo == 'F'){
        switch (Number(faixaEtaria)) {
            case 1: return "👶"; break;
            case 2: return "👧"; break;
            case 3: return "🧒"; break;
            case 4: return "👩"; break;
            case 5: return "👩‍🦳"; break;
        }
    }
}