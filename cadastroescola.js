const buttonSignUp = document.querySelector('button[name=signup]');
const buttonSignIn = document.querySelector('button[name=signin]');
const firebaseAuth = firebase.auth();

buttonSignUp.addEventListener('click', () => {
    const inputEmail = document.getElementById('emailEscola').value;
    const inputPassword = document.getElementById('passwordEscola').value;
    
    firebaseAuth.createUserWithEmailAndPassword(inputEmail, inputPassword)
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
    const inputEmail = document.getElementById('emailEscola').value;
    const inputPassword = document.getElementById('passwordEscola').value;
    firebaseAuth.signWithEmailAndPassword(inputEmail, inputPassword)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
});