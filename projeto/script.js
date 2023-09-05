document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        
        const name = form.name.value;
        const email = form.email.value;
        
        // Armazena os dados no armazenamento local para acesso na próxima página
        localStorage.setItem("formData", JSON.stringify({ name, email }));
        
        window.location.href = "display.html"; // Redireciona para a página de exibição
    });
});
