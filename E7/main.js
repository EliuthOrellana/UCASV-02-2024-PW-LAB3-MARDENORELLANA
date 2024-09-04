const requestValue = (variableName) => {
    let value;
    do {
        value = prompt(`Introduce el valor de ${variableName}:`);
    } while (value === null || value.trim() === ""); //repite mientra sea nulo y este vacio o con espacios
    return value;
}

const main = () => {
    let a = requestValue("a");
    let b = requestValue("b");

    [a, b] = [b, a];//intercambia pos

    alert(`a = ${a}, b = ${b}`);
}

main();
