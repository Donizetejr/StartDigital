 // Implementar o método onContentLoaded e nele chamar o onSubmit
    document.addEventListener("DOMContentLoaded", function() {
        var formulario = document.getElementById("meuFormulario");
        formulario.addEventListener("submit", validarFormulario);
    });
 
 // Função para validar o formulário
 function validarFormulario(event) {
    // Impede o envio do formulário se houver erro
    event.preventDefault();

    // Obter os valores dos campos
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Validar email (verifica se tem o formato correto)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        Notify("Por favor, insira um e-mail válido.", null, null, "warning");
        return false;
    }

    // Validar senha (verifica se a senha não está vazia)
    if (senha.trim() === "") { // trim é utilizado para remover espaços em branco do início e do final da string
        Notify("A senha não pode estar vazia.");
        return false;
    }

    if (senha.length < 8) {
        Notify("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    // Se todas as validações passarem, chama a função enviarDados(email, senha) > notify
    Notify("Formulário enviado com sucesso!", null, null, "success");
}

// pesquisar como fazer uma funçao AJAX (todos)

