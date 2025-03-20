'use strict';

const fileInput = document.getElementById('carregarArquivo');

// Validação do input de arquivo
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const preview = document.querySelector('.previewCarregarArquivo img');
    const infoLabel = document.getElementById('rotuloInformacao');
    const uploadInstruction = document.getElementById('instrucaoUpload');
    const validTypes = ['image/jpeg', 'image/png'];
    const maxFileSize = 500 * 1024; // 500KB

    console.log(file); // Verifique no console se o arquivo está sendo capturado

    // Se nenhum arquivo for selecionado
    if (!file && !preview.src) {
        infoLabel.textContent = "No file selected";
        infoLabel.style.color = "#ff2525";
        return;
    }

    // Se o tipo de arquivo for inválido
    if (!validTypes.includes(file.type)) {
        infoLabel.textContent = "Invalid file type. Please select JPEG or PNG file.";
        infoLabel.style.color = "#ff2525";
        return;
    }

    // Se o arquivo for muito grande
    if (file.size > maxFileSize) {
        infoLabel.textContent = "ⓘ File too large. Please upload a photo under 500KB.";
        infoLabel.style.color = "#ff2525";
        preview.src = "./assets/images/icon-upload.svg";
        uploadInstruction.textContent = "Drag and drop or click to upload";
        return;
    }

    // Leitura e exibição do arquivo
    const reader = new FileReader();
    reader.onload = function (e) {
        preview.src = e.target.result;
        uploadInstruction.textContent = "";
        infoLabel.textContent = "File successfully uploaded.";
        infoLabel.style.color = "#0fff0f";
    };
    reader.readAsDataURL(file);
});

const myForm = document.querySelector('form');

// Validação do formulário
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('emailUsuario').value;
    const fullName = document.getElementById('nomeCompleto').value;
    const githubUsername = document.getElementById('usuarioGithub').value;
    const fileInput = document.getElementById('carregarArquivo');
    const infoLabel = document.getElementById('rotuloInformacao');

    // Se nenhum arquivo for carregado
    if (fileInput.files.length == 0) {
        infoLabel.textContent = "ⓘ Please upload a photo to proceed.";
        infoLabel.style.color = "#ff2525";
        return;
    }

    // Se o arquivo for carregado
    else if (fileInput.files.length != 0) {
        console.log("Submit Form. Now redirecting...");

        // Armazenar imagem e dados do formulário no localStorage
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem("avatar", e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);

        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);
        localStorage.setItem("githubUsername", githubUsername);

        window.location.href = "confirmar.html"; 
    }

    else {
        console.log("Form submission failed");
        return;
    }
});