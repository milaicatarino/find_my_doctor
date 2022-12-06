document.addEventListener('DOMContentLoaded', function() {

    h6s = document.querySelectorAll('h6')

    for (h6 of h6s) {

        h6.addEventListener('click', function(event) {

            t = event.currentTarget
            
            h6= t.querySelector('h6')
            //como pegar só essa parte

            localStorage.setItem('especialidade', h6.innerHTML)

        })

    }
    
    

})


// document.addEventListener('DOMContentLoaded', function() {

//     opcoes = document.querySelectorAll('option')
//     op_0 = opcoes[0]
//     op_1 = opcoes[1]
//     op_2 = opcoes[2]
//     op_3 = opcoes[3]
//     op_4 = opcoes[4]
//     op_5 = opcoes[5]
//     op_6 = opcoes[6]
//     op_7 = opcoes[7]

//     opcoes = [op_0, op_1, op_2, op_3, op_4, op_5, op_6, op_7]

//     for (o of opcoes){

//         o.addEventListener('click', function(event) {
            
//         console.log(o.innerHTML)
//         localStorage.setItem('especialidade', o.innerHTML)

//         })

//     }


// })