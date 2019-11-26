let nomeInput = document.getElementById('nomeInput');
let dataInput = document.getElementById('dataInput');
// let ameacasInput = document.getElementById('ameacasInput');
// let assedioMoralInput = document.getElementById('assedioMorallInput');
// let assedioSexualInput = document.getElementById('assedioSexualInput');
// let boatosInput = document.getElementById('boatosInput');
// let brigasInput = document.getElementById('brigasInput');
// let bullyingCheckbox = document.getElementById('bullyingInput');
// let isolamentosCheckbox = document.getElementById('isolamentosInput');
// let professoresCheckbox = document.getElementById('professoresInput');
// let cozinheirosCheckbox = document.getElementById('cozinheirosInput');
// let segurancasCheckbox = document.getElementById('segurancasInput');
// let gestorCheckbox = document.getElementById('gestorInput');
// let alunosCheckbox = document.getElementById('alunosInput');
// let admCheckbox = document.getElementById('admInput');
let perguntaInput = document.getElementById('perguntaInput');
let perguntadInput = document.getElementById('perguntadInput');
let perguntatInput = document.getElementById('perguntatInput');
let perguntaqInput = document.getElementById('perguntaqInput');
let perguntacInput = document.getElementById('perguntacInput');
let perguntasInput = document.getElementById('perguntasInput');
let perguntaseInput = document.getElementById('perguntaseInput');
let adcButton = document.getElementById('adcButton');
const buttonSign = document.querySelector('button[name=adcButton]');

adcButton.addEventListener('click', function (){
    create(nomeInput.value, dataInput.value, perguntaInput.value, perguntadInput.value, perguntatInput.value, perguntatInput.value, perguntaqInput.value, perguntacInput.value, perguntasInput.value, perguntaseInput.value)
});

function create(nome, data, ameacas, assedioMoral, assedioSexual, boatos, brigas, bullying, isolamentos,  professores, cozinheiros, segurancas, gestor, alunos, adm, pergunta, perguntad, perguntat, perguntaq, perguntac, perguntas, perguntase){
    let user = {
        nome: nome,
        data: data,
        // ameacas: ameacas,
        // assedioMoral: assedioMoral,
        // assedioSexual : assedioSexual,
        // boatos : boatos,
        // brigas : brigas,
        // bullying : bullying,
        // isolamentos : isolamentos,
        // professores : professores,
        // cozinheiros : cozinheiros,
        // segurancas : segurancas,
        // gestor : gestor,
        // alunos : alunos,
        // adm : adm,
        pergunta : pergunta,
        perguntad : perguntad,
        perguntat : perguntat,
        perguntaq : perguntaq,
        perguntac : perguntac,
        perguntas : perguntas,
        perguntase : perguntase,
    };
    return firebase.database().ref().child('questionario').push(user);
}


