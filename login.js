const btnSignIn = document.getElementById('btnsignin');
const inputEmail = document.getElementById('inputemail');
const inputPassword = document.getElementById('inputpassword');
const firebaseAuth = firebase.auth();

btnSignIn.addEventListener('click', () => {
    
    firebaseAuth.signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(result => {
            alert('Usuário Conectado!!');
            console.log(result);
            window.location.replace('loginht.html');
        }).catch(err => {
            alert('E-mail ou senha inválido!');
            console.log(err);
        })
});