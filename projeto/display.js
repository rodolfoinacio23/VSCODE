document.addEventListener("DOMContentLoaded", function() {
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData) {
        const displayName = document.getElementById("display_name");
        const displayEmail = document.getElementById("display_email");

        displayName.textContent = formData.name;
        displayEmail.textContent = formData.email;
    } else {
        window.location.href = "index.html"; // Redireciona de volta se não houver dados
    }
});
