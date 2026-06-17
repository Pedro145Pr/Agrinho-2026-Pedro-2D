const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

function mensagem() {
    document.getElementById("msg").innerHTML =
        "🌱 O Agrinho mostra que a educação e o campo juntos podem construir um futuro melhor e mais sustentável!";
}