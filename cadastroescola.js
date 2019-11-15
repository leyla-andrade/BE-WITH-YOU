const buttonSign = document.querySelector('button[name=sign]');
const buttonSignIn = document.querySelector('button[name=signin]');
const firebaseAuth = firebase.auth();

buttonSign.addEventListener('click', () => {
    const inputEmail = document.getElementById('emailInput').value;
    const inputPassword = document.getElementById('passwordInput').value;
    
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
