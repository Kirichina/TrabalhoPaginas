// Dados fictícios para login e senha
const loginCorreto = "12345678";
const senhaCorreta = "12345678"; 

// Função de validação do login
function validarLogin(event) {
    event.preventDefault();
    const login = document.getElementById("idEntrar").value;
    const senha = document.getElementById("senha").value;
    const errorMessage = document.getElementById("error-message");

    // Verifica se o login e a senha coincidem, caso correto direcionar para pagina inicial do site
    if (login === loginCorreto && senha === senhaCorreta) {
        errorMessage.textContent = "Login bem-sucedido!";
        errorMessage.style.color = "green";
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/Trabalho/Pagina%20Inicial/Home.html";
        }, 1000);
        
    } else {
        errorMessage.textContent = "Login ou senha incorretos!";
        errorMessage.style.color = "red";
    }
}