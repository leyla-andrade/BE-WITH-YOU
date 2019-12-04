const acdButton = document.getElementById('acdButton');

function create(nome, email, url, commet) {
    let user = {
        nome: nome,
        email: email,
        url: url,
        commet: commet
    };
    return firebase.database().ref().child('login').push(user);
}

acdButton.addEventListener('click', function () {
    const nameInput = document.getElementById('nomeCompleto');
    const emailInput = document.getElementById('email');
    const urlInput = document.getElementById('url');
    const commetInput = document.getElementById('commetsInput');
  
    create(nameInput.value, emailInput.value, urlInput.value, commetInput);
    alert('Muito obrigado!!')
   
});