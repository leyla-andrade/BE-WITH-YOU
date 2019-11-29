let nameInput = document.getElementById('nameInput');
let escolaInput = document.getElementById('escolaInput');
let qtdalunosInput = document.getElementById('qtdalunosInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let bairroInput = document.getElementById('bairroInput');
let cidadeInput = document.getElementById('cidadeInput');
let estadoInput = document.getElementById('estadoInput');
let foneInput = document.getElementById('foneInput');
let horaInput = document.getElementById('horaInput');
let statusInput = document.getElementById('statusInput');
let addButton = document.getElementById('addButton');


addButton.addEventListener('click', function (){
    create(nameInput.value, escolaInput.value, qtdalunosInput.value, emailInput.value, passwordInput.value, bairroInput.value, cidadeInput.value, estadoInput.value, foneInput.value, horaInput.value, statusInput.value)
});

function create(nomeDaEscola,nomeDiretor , qtdalunos, email, password, bairro , cidade, estado, fone, hora, status){
    let user = {
        nomeDaEscola: nomeDaEscola,
        nomeDiretor: nomeDiretor,
        qtdalunos: qtdalunos,
        email: email,
        password : password,
        bairro: bairro,
        cidade: cidade,
        estado : estado,
        fone : fone, 
        hora : hora,
        status : status
    };
    return firebase.database().ref().child('Escolas').push(user);
    
}