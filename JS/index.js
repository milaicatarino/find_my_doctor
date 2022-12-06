document.addEventListener('DOMContentLoaded', function() {

    h6s = document.querySelectorAll('h6')

    for (h6 of h6s) {

        a.addEventListener('click', function(event) {

            t = event.currentTarget
            
            h6= t.querySelector('h6')
            //como pegar só essa parte

            localStorage.setItem('especialidade', h6.innerHTML)

        })

    }
    
    

})
