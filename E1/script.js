const countVotes = (votos)=>{
let resultado=[];
 votos.forEach(votos =>{
    
        resultado[votos.candidate]=(resultado[votos.candidate]|| 0) +1;
    })

    return resultado;

}
const showResults = (result)=>{

    alert("Resultados de las votacion")
    for(let candidate in result){
        alert(`${candidate}; ${result[candidate]} votos`)
    }
}
const main = () => {

    let votos = [
        {candidate: 'alice'},
        {candidate: 'bob'},
        {candidate: 'alice'},
        {candidate: 'alice'}
    ];

    const resultado = countVotes(votos);
    showResults(resultado)


}

main();