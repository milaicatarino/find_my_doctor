document.addEventListener('DOMContentLoaded', function() {

    especialidade = document.querySelector('.esp')

    especialidade.innerHTML= 'Clínicas da especialidade: ' + localStorage.getItem('key') + '\n'

    botao = document.querySelector('button')

    botao.addEventListener('click', function(event) {
            
        conv = document.getElementById("convenios").value
        localStorage.setItem("conv",conv)
        
          })

    

})
