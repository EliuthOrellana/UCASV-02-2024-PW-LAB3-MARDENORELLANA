const fibonacciCalculate = (CantidadDeSecuencia) => {
    if (CantidadDeSecuencia === 0) return [];//si es cero returna un arreglo vacio
    if (CantidadDeSecuencia === 1) return [0];// si es uno retorna solo cero, el primero en la secuencia
    
    let secuencia = [0, 1];
    for (let i = 2; i < CantidadDeSecuencia; i++) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]); //accede al penultimo y antepenultimo los suma y lo agrega al array
    }
    return secuencia;
}

const requestQuantity = () => {
    let Cantidad;
    do {
        Cantidad = parseInt(prompt("¿Cuantos numeros para la secuencia de Fibonacci quiere generar?"));
    } while (isNaN(Cantidad) || Cantidad < 0);//evalua que sea entero positivo
    return Cantidad;
}

const main = () => {
    const CantidadDeSecuencia = requestQuantity(); //solicita cantidad de la secuencia evaluando que sea entero positivo
    
    if (CantidadDeSecuencia === 0) {
        alert("Nada que generar, ingreso CERO");
    } else {
        const fibonacciSequence = fibonacciCalculate(CantidadDeSecuencia);
        alert(`La secuencia de Fibonacci de ${CantidadDeSecuencia} es la siguiente: ${fibonacciSequence.join(', ')}`);//concatena en un solo arreglo la cadena
    }
}

main();
