// Transformar notas escolares

// Crie um algoritmo que transforme as notas do sistema 
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima - A
// * entre 80 - 89 - B
// * entre 70 - 79 - C
// * entre 60 - 69 - D
// * menor que 60 - F



function getScore(score){
    let scoreA = score <= 100 && score >= 90;
    let scoreB = score <= 89 && score >= 80;
    let scoreC = score <= 79 && score >= 70;
    let scoreD = score <= 69 && score >= 60;
    let scoreF = score < 60 && score >= 0;

    let scoreFinal;



    if (scoreA){
        scoreFinal = 'Excelente! Sua nota é A! Você conseguiu obter a pontuação máxima!'
    } else if(scoreB){
        scoreFinal = 'Ótimo! Sua nota é B! Continue indo assim.'
    } else if(scoreC){
        scoreFinal = 'Está ok, sua nota equivale a C. Podemos juntos melhorar.'
    } else if(scoreD){
        scoreFinal = 'Poxa, continue estudando. Sua nota equivale a D.'
    } else if(scoreF){
        scoreFinal = 'Sua nota equivale a F. Você vai conseguir aprender a matéria. Não desista.'
    } else{
        scoreFinal = 'Nota inválida'
    }

    return scoreFinal
}

console.log(getScore(68))




