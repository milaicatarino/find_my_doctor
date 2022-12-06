document.addEventListener('DOMContentLoaded', function() {

    h5= document.querySelector('h5')

    h5.innerHTML= 'Clínicas do convênio: ' + localStorage.getItem('convenio')

})