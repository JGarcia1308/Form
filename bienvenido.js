let res = document.getElementById('user');

window.communication.inicioCorrecto(function(event,args){
    res.innerHTML = 'Bienvenido ' + args;
})