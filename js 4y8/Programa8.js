let resultado = '';
// Solicitar al usuario el número de ciclos
let n = parseInt(prompt("Introduce el número de ciclos al que tiene que llegar el programa:"));

// Loop principal para imprimir la figura desde ciclo 1 hasta ciclo N
for (let ciclo = 1; ciclo <= n; ciclo++) {
    for (let i = 1; i <= ciclo; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += '#';
        }
        resultado += '\n'; // Agregar una nueva línea
    }
}

// Mostrar el resultado en una ventana emergente
alert(resultado);