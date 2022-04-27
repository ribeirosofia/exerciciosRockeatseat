/* ### Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

function convertDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahreinheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahreinheitExists){
        throw new Error('Grau não identificado');
    }

    // fluxo ideal de F para C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = fahreinheit => (fahreinheit - 32) * 5/9
    let degreeSign = 'C'


    // fluxo alternativo de C para F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign

}

try{
    console.log(convertDegree('80F'))
    console.log(convertDegree('26C'))
    console.log(convertDegree('80Z'))

} catch(error){
    console.log(error.message);   
}