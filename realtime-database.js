const nameInput = document.getElementById('nomeInput');
const dataInput = document.getElementById('dataInput');
const textInput = document.getElementById('textInput');
const exemplosInput = document.getElementById('exemplosInput');
const perguntaInput = document.getElementById('perguntaInput');
const perguntadInput = document.getElementById('perguntadInput');
const perguntatInput = document.getElementById('perguntatInput');
const perguntaqInput = document.getElementById('perguntaqInput');
const perguntacInput = document.getElementById('perguntacInput');
const perguntasInput = document.getElementById('perguntasInput');
const perguntaseInput = document.getElementById('perguntaseInput');
const adcButton = document.getElementById('adcButton');
const buttonSign = document.querySelector('button[name=adcButton]');

adcButton.addEventListener('click', function () {
    create(nameInput.value, dataInput.value, textInput.value, exemplosInput.value, perguntaInput.value, perguntadInput.value, perguntatInput.value, perguntatInput.value, perguntaqInput.value, perguntacInput.value, perguntasInput.value, perguntaseInput.value)
});

function create(nome, data, text, exemplos, pergunta, perguntad, perguntat, perguntaq, perguntac, perguntas, perguntase) {
    let user = {
        nome: nome,
        data: data,
        text: text,
        exemplos: exemplos,
        pergunta: pergunta,
        perguntad: perguntad,
        perguntat: perguntat,
        perguntaq: perguntaq,
        perguntac: perguntac,
        perguntas: perguntas,
        perguntase: perguntase,
    };
    return firebase.database().ref().child('questionario').push(user);
}


