

document.addEventListener('DOMContentLoaded', function() {

    botoes = document.querySelectorAll('button')
    botao = botoes[1]

    botao.addEventListener('click', function(event) {
            
        esp = document.getElementById("especialidades").value
        localStorage.setItem("key",esp)
        
          })

    

})