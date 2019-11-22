
const buttonSignIn = document.querySelector('button[name=signin]');
const firebaseAuth = firebase.auth();

buttonSignIn.addEventListener('click', () => {
    const inputEmail = document.getElementById('inputemail').value;
    const inputPassword = document.getElementById('inputpassword').value;
    firebaseAuth.signInWithEmailAndPassword(inputEmail, inputPassword)
        .then(result => {
            alert('Usuário Conectado!!');
            console.log(result);
            window.location.replace('loginht.html');
        }).catch(err => {
            alert('E-mail ou senha inválido!');
            console.log(err);
        })
});