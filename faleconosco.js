const adButton = document.getElementById('adButton');

function create(nome, email, url, commet) {
    let user = {
        nome: nome,
        email: email,
        url: url,
        commet: commet
    };
    return firebase.database().ref().child('fale conosco').push(user);
}

adButton.addEventListener('click', function () {
    const nameInput = document.getElementById('nomeCompleto');
    const emailInput = document.getElementById('email');
    const urlInput = document.getElementById('url');
    const commetInput = document.getElementById('commetsInput');
  
    create(nameInput.value, emailInput.value, urlInput.value, commetInput);
    alert('Muito obrigado!!')
   
});