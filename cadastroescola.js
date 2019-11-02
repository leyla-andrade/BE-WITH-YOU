const buttonSingUp = document.querySelector('button[name=signup]');
const buttonSingUp = document.querySelector('button[name=signup]');

const inputEmail = document.querySelector('input[name=email]');
const inputPassword = document.querySelector('input[name=password]');

const firebaseAuth = firebase.auth();

buttonSingUp.addEventListener('click', () =>{
    firebaseAuth.createUserWithEmailAndPassword(inputEmail.Value, inputPassword.value )
        .then(result => {
         alert('Conta feita com sucesso');
         console.log(result);
         const user = result.user;
         user.sendEmailVerification().then(result => {
             alert('E-mail enviado com sucesso!');
         }).catch(err => {
             alert('Verifique seu e-mail, não foi enviado!');
         })
        }) .catch(err => {
            alert('Ocorreu um Erro, tente novamente!')
            console.log(err);
        })
    
});

buttonSingUp.addEventListener('click', () => {
    firebaseAuth.signWithEmailAndPassword(inputEmail.value, inputPassword.value)
       .then(result => {
          console.log(result); 
       }).catch(err => {
           console.log(err);
       })
});