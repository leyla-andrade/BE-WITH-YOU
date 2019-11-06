const buttonSignUp = document.querySelector('button[name=signup]');
const buttonLogin = document.querySelector('button[name=login]');
const firebaseAuthenticantion = firebase.auth();

buttonSignUp.addEventListener('click', () => {
    const inputEmaill = document.getElementById('emailAluno').value;
    const inputPassworld = document.getElementById('passwordAluno').value;
    
    firebaseAuthenticantion.createUserWithEmailAndPassword(inputEmaill, inputPassworld)
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

buttonLogin.addEventListener('click', () => {
    const inputEmaill = document.getElementById('emailAluno').value;
    const inputPassworld = document.getElementById('passwordAluno').value;
    firebaseAuthenticantion.signWithEmailAndPassword(inputEmaill, inputPassworld)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
});