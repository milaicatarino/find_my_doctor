document.addEventListener('DOMContentLoaded', function() {

    botao_enviar = document.querySelector('.botao-enviar')
    botao_enviar.style.borderRadius = '0.5rem'

    msg_titulo = document.querySelectorAll('.msg-titulo')
    qtd = msg_titulo.length
    qtd = qtd.toString()
    i = 0
    while (i <= qtd-1){
        nome_usu = msg_titulo[i].querySelector('h6')
        nome_usu.innerHTML = 'Dr. Mário'
        i += 1
    }

    msg_titulo_resp = document.querySelectorAll('.msg-titulo-invertida')
    qtd_resp = msg_titulo_resp.length
    qtd_resp = qtd_resp.toString()
    j = 0
    while (j <= qtd_resp-1){
        nome_usu_resp = msg_titulo_resp[j].querySelector('h6')
        nome_usu_resp.innerHTML = 'Dra. Janaína'
        j += 1
    }

    main  = document.getElementById('main')
    msg_nova = document.querySelector('input[type="text"]')
    enviar = document.querySelector('.botao-enviar')

    enviar.addEventListener('click', function(event) {
        pergunta_final = document.createElement('section')
        pergunta = document.createElement('div')
        titulo = document.createElement('div')
        titulo.innerHTML = 'Dr. Mário'
        titulo.style.display = 'flex'
        titulo.style.flexDirection = 'column'
        titulo.style.alignItems = 'flex-start'
        titulo.style.justifyContent =  'flex-start'
        titulo.style.fontSize =  '1 rem'
        titulo.style.color = 'black'

        horario = document.createElement('h2')
        horario.innerHTML = 'Horário'
        horario.style.display = 'flex'
        horario.style.flexDirection = 'column'
        horario.style.alignItems = 'flex-start'
        horario.style.justifyContent =  'flex-start'
        horario.style.fontSize = '0.5rem'
        horario.style.color =  'black'
        horario.style.margin =  '1rem'

        pergunta.innerHTML = 'Bom dia.'
        pergunta.style.display = 'flex'
        pergunta.style.flexDirection = 'column'
        pergunta.style.alignSelf = 'flex-start'
        pergunta.style.backgroundColor = '#35709C'
        pergunta.style.border = '0.2rem'
        pergunta.style.padding = '1rem'
        pergunta.style.borderRadius = '0.5rem'
        pergunta.style.color = 'white'
        pergunta.style.justifyContent = 'flex-start'

        pergunta_final.style.display = 'flex'
        pergunta_final.style.flexDirection = 'column'
        pergunta_final.style.justifyContent = 'space-evenly'
        pergunta_final.style.margin =  '0.5rem 2.5rem'
        pergunta_final.style.padding = '1rem'

        pergunta_final.appendChild(titulo)
        pergunta_final.appendChild(horario)
        pergunta_final.appendChild(pergunta)
        main.appendChild(pergunta_final)

        event.preventDefault()
    })

})