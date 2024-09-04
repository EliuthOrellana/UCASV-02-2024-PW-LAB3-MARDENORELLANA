const createCounter = () => {
    let count = 0;
    return () => ++count; //incrementa y retorna una funcion que incrementa en valor del contador
}


const showCounter = (counter) => {
    alert(counter());//muestra el valor del contador en una alerta
}


const requestNumber = () => {
    let numero;
    do {
        numero = parseInt(prompt("ingrese un numero"));
    } while (isNaN(numero) || numero < 0);//evalua que sea un entero positivo
    return numero;
}


const main = () => {
    const max = requestNumber();//numero solicitado
    const counter = createCounter();
    
    for (let i = 0; i < max; i++) {
        showCounter(counter); //muestra el contador
    }
}


main();
