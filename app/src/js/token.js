// Função para mover o foco automaticamente para o próximo campo
function moveFocus(currentInput, nextInputId) {
    // Verifica se o valor digitado é um número
    if (/[^0-9]/.test(currentInput.value)) {
        currentInput.value = "";  // Limpa o valor se não for um número
    } else {
        // Move o foco para o próximo campo se o valor for válido
        if (currentInput.value.length === 1) {
            document.getElementById(nextInputId).focus();
        }
    }
}

// Função para validar o token
function validarToken() {
    // Obter os valores dos campos de entrada
    var token1 = document.getElementById('number1').value;
    var token2 = document.getElementById('number2').value;
    var token3 = document.getElementById('number3').value;
    var token4 = document.getElementById('number4').value;

    // Verificar se todos os campos de token estão preenchidos
    if (token1 === "" || token2 === "" || token3 === "" || token4 === "") {
        alert("Por favor, insira todos os números do código.");
        return false;  // Não permite enviar o formulário
    }

    // Caso os 4 campos estejam preenchidos, podemos enviar o formulário ou fazer a validação final
    var token = token1 + token2 + token3 + token4;
    alert("Token inserido: " + token);

    // Se desejar, você pode enviar o formulário ou realizar outras ações com o token
    // Por exemplo, aqui você pode simular o envio para o servidor:
    // document.getElementById('formulario').submit();
    return true;  // Indica que a validação foi bem-sucedida
}
