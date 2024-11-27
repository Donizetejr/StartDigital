// document.addEventListener("DOMContentLoaded", function() {
//     // Função para alternar a visibilidade da senha
//     function togglePasswordVisibility(inputId); {
//         const input = document.getElementById(inputId);
//         const icon = input.nextElementSibling; // O ícone está logo após o input
//         if (input.type === "password") {
//             input.type === "text"; // Mostra a senha
//             icon.classList.remove("bi-eye"); // Remove o ícone de "olho aberto"
//             icon.classList.add("bi-eye-slash"); // Adiciona o ícone de "olho fechado"
//         } else {
//             input.type = "password"; // Esconde a senha
//             icon.classList.remove("bi-eye-slash"); // Remove o ícone de "olho fechado"
//             icon.classList.add("bi-eye"); // Adiciona o ícone de "olho aberto"
//         }
//     }
//         }
// )

// // Função para validar o formulário
//  document.getElementById('redefinirForm').addEventListener('submit', function(event) {
//     event.preventDefault();  // Impede o envio do formulário enquanto estamos validando

//     // Obter os valores das senhas
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     // Verificar se a senha tem no mínimo 8 caracteres
//     if (password.length < 8) {
//         Notify("A senha deve ter no mínimo 8 caracteres.", null, null, "warning");
//         return false;
//     }

//     // Verificar se as senhas coincidem
//     if (password !== confirmPassword) {
//         Notify("As senhas não coincidem. Por favor, tente novamente."), null, null, "warning";
//         return false;
//     }

//     // Se todas as validações forem bem-sucedidas, envie o formulário
//     Notify("Senha redefinida com sucesso!"), null, null, "success";
// });


// Implementar o método onContentLoaded e nele chamar o onSubmit
document.addEventListener("DOMContentLoaded", function() {
    
    // Função para alternar a visibilidade da senha
    function togglePasswordVisibility(inputId) {
        const input = document.getElementById(inputId);
        const icon = input.nextElementSibling; // O ícone está logo após o input
        if (input.type === "password") {
            input.type = "text"; // Mostra a senha
            icon.classList.remove("bi-eye"); // Remove o ícone de "olho aberto"
            icon.classList.add("bi-eye-slash"); // Adiciona o ícone de "olho fechado"
        } else {
            input.type = "password"; // Esconde a senha
            icon.classList.remove("bi-eye-slash"); // Remove o ícone de "olho fechado"
            icon.classList.add("bi-eye"); // Adiciona o ícone de "olho aberto"
        }
    }

    // Adicionar o evento de clique para alternar a visibilidade da senha
    const passwordIcon = document.querySelector("olho-magico");
    const confirmPasswordIcon = document.querySelector("olho-magic");
    
    if (passwordIcon) {
        passwordIcon.addEventListener('click', function() {
            togglePasswordVisibility('passwordEye');
        });
    }
    
    if (confirmPasswordIcon) {
        confirmPasswordIcon.addEventListener('click', function() {
            togglePasswordVisibility('confirm-passwordEye');
        });
    }

    // Função para validar o formulário
    const formulario = document.getElementById('redefinirForm');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();  // Impede o envio do formulário enquanto estamos validando

            // Obter os valores das senhas
            const password = document.getElementById('passwordEye').value;
            const confirmPassword = document.getElementById('confirm-passwordEye').value;

            // Verificar se a senha tem no mínimo 8 caracteres
            if (password.length < 8) {
                Notify("A senha deve ter no mínimo 8 caracteres.", null, null, "warning");
                return false;
            }

            // Verificar se as senhas coincidem
            if (password !== confirmPassword) {
                Notify("As senhas não coincidem. Por favor, tente novamente.", null, null, "warning");
                return false;
            }

            // Se todas as validações forem bem-sucedidas, envie o formulário
            Notify("Senha redefinida com sucesso!", null, null, "success");
        });
    }
});
  