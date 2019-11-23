let nomeInput = document.getElementById('nomeInput');
let dataInput = document.getElementById('dataInput');
let ameacasInput = document.getElementById('ameacasInput');
let assedioMoralInput = document.getElementById('assedioMorallInput');
let assedioSexualInput = document.getElementById('assedioSexualInput');
let boatosInput = document.getElementById('boatosInput');
let brigasInput = document.getElementById('brigasInput');
let bullyingInput = document.getElementById('bullyingInput');
let isolamentosInput = document.getElementById('isolamentosInput');
let professoresInput = document.getElementById('professoresInput');
let cozinheirosInput = document.getElementById('cozinheirosInput');
let segurancasInput = document.getElementById('segurancasInput');
let gestorInput = document.getElementById('gestorInput');
let alunosInput = document.getElementById('alunosInput');
let admInput = document.getElementById('admInput');
let perguntaInput = document.getElementById('perguntaInput');
let perguntadInput = document.getElementById('perguntadInput');
let perguntatInput = document.getElementById('perguntatInput');
let perguntaqInput = document.getElementById('perguntaqInput');
let perguntacInput = document.getElementById('perguntacInput');
let perguntasInput = document.getElementById('perguntasInput');
let perguntaseInput = document.getElementById('perguntaseInput');
let adcButton = document.getElementById('adcButton');

adcButton.addEventListener('click', function (){
    create(nomeInput, dataInput, ameacasInput, assedioMoralInput, assedioSexualInput, boatosInput, brigasInput, bullyingInput, isolamentosInput, professoresInput, cozinheirosInput, segurancasInput, gestorInput, alunosInput, admInput, perguntaInput, perguntadInput, perguntatInput, perguntatInput, perguntaqInput, perguntacInput, perguntasInput, perguntaseInput)
});

function create(nome, data, ameacas, assedioMoral, assedioSexual, boatos, brigas, bullying, isolamentos,  professores, cozinheiros, segurancas, gestor, alunos, adm, pergunta, perguntad, perguntat, perguntaq, perguntac, perguntas, perguntase){
    let user = {
        nome: nome,
        data: data,
        ameacas: ameacas,
        assedioMoral: assedioMoral,
        assedioSexual : assedioSexual,
        boatos : boatos,
        brigas : brigas,
        bullying : bullying,
        isolamentos : isolamentos,
        professores : professores,
        cozinheiros : cozinheiros,
        segurancas : segurancas,
        gestor : gestor,
        alunos : alunos,
        adm : adm,
        pergunta : pergunta,
        perguntad : perguntad,
        perguntat : perguntat,
        perguntaq : perguntaq,
        perguntac : perguntac,
        perguntas : perguntas,
        perguntase : pergunta,
    };
    return firebase.database().ref().child('Questionário').push(user);
}


