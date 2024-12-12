// Lógica

// entrada senha, nova senha
// ler valor de entrada

// funcao validarSenha() 
//     se senha for igual a null ou " " 
//     // exiba notify informando erro
//     se senha for < 8 caracteres 
//     // exiba notify informando erro
//    se nao
//    // senha válida

//    se novaSenha for diferente de senha
//    // exiba notify informando erro 
//    senao
//    // senha válida

const form = document.querySelector('#redefinirForm')

// Adiciona evento de 'submit' ao formulário
form.addEventListener('submit', (event) => {

  // Impede o envio tradicional do formulário
  event.preventDefault();

  // Obtém dados do formulário e converte para objeto Javascript
  const data = Object.fromEntries(new FormData(event.target).entries());
  console.log(data)

  var senha = data.senha;
  var confirmaSenha = data.confirmaSenha;

  console.log(senha, confirmaSenha)

  validarForm(senha, confirmaSenha);
});

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

function validarconfirmarSenha(senha, confirmaSenha) {
    if(confirmaSenha === "") {
        Notify("A nova senha não pode estar vazia.", null, null, "warning");
        return false;
    }
    else if(confirmaSenha !== senha) {
        Notify("A senha deve ser a mesma.", null, null, "warning");
    return false;
    }
    return true;
}

function validarForm(senha, confirmaSenha) {
    var senhaIsValid = validarSenha(senha);
    var confirmaSenhaIsValid = validarconfirmarSenha(senha, confirmaSenha);

    if (senhaIsValid && confirmaSenhaIsValid) {
        Notify("Login realizado com sucesso!", null, null, "success");
    }
}
