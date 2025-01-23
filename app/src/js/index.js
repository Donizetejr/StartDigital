/* 
Campos dos formulários para enviar para o Banco de Dados

Campos: Nome, E-mail, Telefone, Celular, Faturamento Mensal.

1- Chamar função salvarFormulario que vai pegar os dados digitados e formar um objeto no seguinte formato
    {nome: "", email: "", telefone: "", celular: "", faturamentoMensal: ""}

2- A função salvarFormulario deve chamar a função validarCampos que fará a validação dos campos
digitados pelo usuário, verificando se não estão preenchidos, se 
eles estiverem preenchidos, então deve ser dado alert("Dados salvos com sucesso!") 
OBS.: Estudar requisições ajax com js

*/

const form = document.querySelector('#formContato')

// Adiciona evento de 'submit' ao formulário

// form.addEventListener('submit', (event) => {

//   // Impede o envio tradicional do formulário
//   event.preventDefault();

//   // Obtém dados do formulário e converte para objeto Javascript
//   const data = Object.fromEntries(new FormData(event.target).entries());
//   console.log(data);

//   var nome = data.nome;
//   var email = data.email;
//   var celular = data.celular;

//   validarFormulario(nome, email, celular);
// });

function valideNome(nome) {
    var nomePattern = /^[a-zA-ZÀ-ÿ]+(?:[\s-][a-zA-ZÀ-ÿ]+)*$/;
    if (nome === "" || nome.length < 3) {
        Notify("Preencha o campo de nome com pelo menos 3 caracteres", null, null, "warning");
        return false;
    } else if (!nomePattern.test(nome)) {
        Notify("Por favor, insira um nome válido.", null, null, "warning");
        return false;
    }
    return true;
}

function valideEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        Notify("Preencha o campo de e-mail", null, null, "warning");
        return false;
    } else if (!emailPattern.test(email)) {
        Notify("Por favor, insira um e-mail válido.", null, null, "warning");
        return false;
    }
    return true;
}


function valideCelular(celular) {
    if (celular === "") {
        Notify("Preencha o campo de celular", null, null, "warning");
        return false;
    }
    return true;
}


document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelectorAll(".phone");


    // Aplica a máscara a cada um dos inputs
    phoneInput.forEach(function (inputPhone) {
        inputPhone.addEventListener("input", function (event) {
            let value = event.target.value;
            value = value.replace(/\D/g, ""); // Remove tudo o que não é número
            value = value.substring(0, 11); // Limita a 11 dígitos

            // Formata o número conforme os caracteres são digitados
            if (value.length > 2 && value.length <= 7) {
                value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
            } else if (value.length > 7) {
                value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
            }
            console.log(value);
            console.log(event.target.value);
            inputPhone.value = value
        })
    })
})

function validarFormulario(nome, email, celular) {
    var nomeIsValid = valideNome(nome);
    var emailIsValid = valideEmail(email);
    var celularIsValid = valideCelular(celular);

    if (nomeIsValid && emailIsValid && celularIsValid) {
        Notify("Formulário realizado com sucesso!", null, null, "success");
    }
}


//  // Seleciona todos os elementos com a classe "phone"
//  const telefoneInputs = document.querySelectorAll(".phone");

//  // Aplica a máscara a cada um dos inputs
//  telefoneInputs.forEach(function(input) {
//    input.addEventListener("input", function(event) {
//      let value = event.target.value;
//      value = value.replace(/\D/g, ""); // Remove tudo o que não é número
//      value = value.substring(0, 11); // Limita a 11 dígitos

//      // Formata o número conforme os caracteres são digitados
//      if (value.length > 2 && value.length <= 7) {
//        value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
//      } else if (value.length > 7) {
//        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
//      }

//      // Atualiza o valor do campo de input
//      event.target.value = value;
//    });
//  });

// // Função para validar o e-mail
// function validarEmail(email) {
//  // Expressão regular para validar o formato de um e-mail
//  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//  return regex.test(email);
// }

// // Adicionando um listener para o envio do formulário
// document.getElementById("formulario").addEventListener("submit", function(event) {
//  // Pegando o valor do e-mail do campo
//  const email = document.getElementById("email").value;

//  // Validando o e-mail
//  if (validarEmail(email)) {
//      // Se o e-mail não for válido, impedimos o envio e mostramos um alerta
//      alert("Por favor, insira um e-mail válido.");
//      event.preventDefault();  // Previne o envio do formulário
//  } else {
//      // E-mail válido, o formulário pode ser enviado
//      alert("E-mail válido! Formulário enviado.");
//  }
// });

// //


