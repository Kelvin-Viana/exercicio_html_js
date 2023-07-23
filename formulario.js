const form= document.getElementById('form');


function validaForm(primeiro, segundo) {
    let regra = primeiro < segundo;
    primeiro = parseInt(primeiro)
    segundo = parseInt(segundo)
    return regra;
}


form.addEventListener('submit', function(e){
    let formValido = false
    e.preventDefault();


    const menor= document.getElementById('menor');
    const maior= document.getElementById('maior');
    const mensagemSucesso = `Parabéns! O número <b>${maior.value}</b> é maior que o número <b>${menor.value}</b>!`
    const mensagemFalha = `Tente Novamente! O número <b>${maior.value}</b> não é maior que o número <b>${menor.value}</b>!`

    formValido = validaForm(menor.value, maior.value)
    if (formValido) {
        const falha  = document.querySelector('.falha');
        falha.style.display = 'none';
        const sucesso  = document.querySelector('.sucesso');
        sucesso.innerHTML = mensagemSucesso;
        sucesso.style.display = 'block';

        menor.value = ' ';
        maior.value = ' ';
    } else {
        const sucesso  = document.querySelector('.sucesso');
        sucesso.style.display = 'none';
        const falha  = document.querySelector('.falha');
        falha.innerHTML = mensagemFalha;
        falha.style.display = 'block';

    }
})

