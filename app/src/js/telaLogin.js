

// pesquisar como fazer uma funçao AJAX (todos)

// Lógica

// entrada email, senha
// ler valor de entrada

// funcao validarLogin() 
//     se email for igual a null ou " " 
//     // exiba notify informando erro
//     se email for < 4 caracteres ou não possui @
//     // exiba notify informando erro
//    se nao
//    // email válido

//    se senha for igual a null ou " "
//    // exiba notify informando erro 
//    se senha <8 caracteres
//    // notify informando senha invalida
//    senao 
//    // senha válida

var form = document.getElementById("meuFormulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var inputEmail = document.getElementById("email");
    var inputSenha = document.getElementById("senha");

    var email = inputEmail.value;
    var senha = inputSenha.value;

    validarForm(email, senha);
})

function validarEmail(email) {    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email === "") {
        Notify("Por favor, insira um e-mail válido.", null, null, "warning");
        return false;
    }
    else if (!emailPattern.test(email)) {
        Notify("Por favor, insira um e-mail válido.", null, null, "warning");
        return false;
    }
    return true;
}

function validarSenha(senha) {
    
    if(senha === "") {
        Notify("A senha não pode estar vazia.", null, null, "warning");
        return false;
    }
    else if(senha.length < 8) {
        Notify("A senha precisa ter no mínimo 8 caracteres.", null, null, "warning");
        return false;
    }

    return true;
}

function validarForm(email, senha) {
    var emailIsValid = validarEmail(email);
    var senhaIsValid = validarSenha(senha);

    if (emailIsValid && senhaIsValid) {
        Notify("Login realizado com sucesso!", null, null, "success");
    }
}


