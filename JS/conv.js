document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.
    convenios = document.querySelector('.convenios')

    convenios.innerHTML= 'Clínicas da especialidade: ' + localStorage.getItem('conv') + '\n'


})