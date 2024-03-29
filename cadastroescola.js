const buttonSign = document.querySelector('button[name=sign]');
const firebaseAuth = firebase.auth();

buttonSign.addEventListener('click', () => {
    const inputEmail = document.getElementById('emailInput').value;
    const inputPassword = document.getElementById('passwordInput').value;

    firebaseAuth.createUserWithEmailAndPassword(inputEmail, inputPassword)
        .then(result => {
            alert('Conta feita com sucesso!! Faça seu login e confira nossas ferramentas. O Mapeamento será enviado por e-mail, aguardamos do dia do cadastro da escola até completar um mês, e assim, mandaremos o mapeamento. Qualquer dúvida, mande um e-mail para o Be With You!');
            console.log(result);
            const user = result.user;
            user.sendEmailVerification().then(result => {
                alert('E-mail de verificação de usuário enviado com sucesso!');
            }).catch(err => {
                alert('Verifique seu e-mail, não foi enviado um e-mail de veficação do usuário!');
            })
        }).catch(err => {
            alert('Ocorreu um Erro, tente novamente!');
            console.log(err);
        })

});
