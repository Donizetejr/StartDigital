 // Implementar o método onContentLoaded e nele chamar o onSubmit
 document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("esqueciSenha");
        formulario.addEventListener("submit", esqueciSenha);
});
 
 // Função para validar o formulário
 function esqueciSenha(event) {
    // Impede o envio do formulário se houver erro
    event.preventDefault();

    // Obter os valores dos campos
    var email = document.getElementById('email').value;

    // Validar email (verifica se tem o formato correto)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        Notify("Por favor, insira um e-mail válido.", null, null, "warning");
        return false;
    }

    // Se todas as validações passarem, envia o formulário
    Notify("Enviado com sucesso!", null, null, "success");
}