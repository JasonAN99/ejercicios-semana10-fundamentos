let numeros = prompt ("Digite varios números separados por comas");
let lista = numeros.split(',');

alert(lista);

let eliminar = prompt ("Digite el valor que desea eliminar");
let resultado = lista.filter((item) => item !== eliminar);

alert(resultado);

