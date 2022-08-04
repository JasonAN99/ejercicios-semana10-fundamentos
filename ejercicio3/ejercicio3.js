let numeros = prompt ("Digite varios números separados por comas");
let lista = numeros.split(',');
let resultado = [];

let tempArray = [...lista].sort();

for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
        resultado.push(tempArray[i]);
    }
}

alert(resultado);

