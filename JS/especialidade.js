document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.
    h7= document.querySelector('h7')

    h7.innerHTML= 'Clínicas da especialidade: ' + localStorage.getItem('especialidade') + '\n'

    options = document.querySelectorAll('option')

    for (option of options) {

        option.addEventListener('click', function(event) {

            t = event.currentTarget
            
            option= t.querySelector('option')
            //como pegar só essa parte

            localStorage.setItem('convenio', option.innerHTML)
            event.preventDefault()

        })

    }
})

// document.addEventListener('DOMContentLoaded', function() {

//     especialidade = document.querySelector('.especialidade')
//     especialidade.innerHTML = localStorage.getItem('especialidade')

// })