let numeros = prompt ("Digite varios números separados por comas");
let lista = numeros.split(',');
let resultado = 1;

lista.forEach(funcion);

function funcion(item) {
    resultado = resultado * item;
}

alert(resultado);

