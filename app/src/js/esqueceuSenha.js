 // Lógica

// entrada email
// ler valor de entrada

// funcao esqueceuSenha() 
//     se email for igual a null ou " " 
//     // exiba notify informando erro
//     se email for < 4 caracteres ou não possui @
//     // exiba notify informando erro
//    se nao
//    // email válido


const form = document.querySelector('#esqueciSenha')

// Adiciona evento de 'submit' ao formulário
form.addEventListener('submit', (event) => {

  // Impede o envio tradicional do formulário
  event.preventDefault();

  // Obtém dados do formulário e converte para objeto Javascript
  const data = Object.fromEntries(new FormData(event.target).entries());
  console.log(data)

  var email = data.email;

  validarForm(email);
});

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


function validarForm(email) {
    var emailIsValid = validarEmail(email);

    if (emailIsValid) {
        Notify("Login realizado com sucesso!", null, null, "success");
    }
}
