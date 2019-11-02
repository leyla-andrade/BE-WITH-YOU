const buttonSignUp = document.querySelector('button[name=signup]');
const buttonSignIn = document.querySelector('button[name=signin]');

const inputEmail = document.querySelector('input[name=email]');
const inputPassword = document.querySelector('input[name=password]');

const firebaseAuth = firebase.auth();

buttonSignUp.addEventListener('click', () => {
    firebaseAuth.createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(result => {
            alert('Conta feita com sucesso');
            console.log(result);
            const user = result.user;
            user.sendEmailVerification().then(result => {
                alert('E-mail enviado com sucesso!');
            }).catch(err => {
                alert('Verifique seu e-mail, não foi enviado!');
            })
        }).catch(err => {
            alert('Ocorreu um Erro, tente novamente!')
            console.log(err);
        })

});

buttonSignIn.addEventListener('click', () => {
    firebaseAuth.signWithEmailAndPassword(inputEmail.value, inputPassword.value)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
});