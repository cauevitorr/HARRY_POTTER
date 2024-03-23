function validacao() {
    //Requisição de dados:
    const myEmail = document.getElementById("email").value

    //Regex's:
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;

        //Validação de Email:
    if (regexEmail.test(myEmail)) {
        return true
    }
    else if (regexEmail.test(myEmail) === false){
        return alert('ERRO..:\nEmail inválido.')
    }

    const resposta = document.getElementsByClassName("resposta")
    resposta.innerHTML = "<p>Login concluido!</p>"

}