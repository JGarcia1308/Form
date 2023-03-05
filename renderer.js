let nombre = document.getElementById('loginNombre');
let btnsubmit = document.getElementById('btnSubmit');

btnsubmit.addEventListener('click', function (event) {
    event.preventDefault();    
    window.communication.usuarioValido(nombre.value);
})

window.communication.inicioCorrecto(function(event,args){
    alert(args);
})