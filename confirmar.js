window.onload = function () {
    const avatar = localStorage.getItem('avatar');
    const fullName = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    const githubUsername = localStorage.getItem('githubUsername');

    console.log(fullName);

    if (fullName && email && githubUsername) {
        const allNameTags = Array.from(document.getElementsByClassName('nomeUsuario'));

        allNameTags.forEach((elem) => elem.textContent = fullName);

        document.getElementById('avatarSvg').src = avatar;
        document.getElementById('email').textContent = email;
        document.getElementById('usuarioGithub').textContent = githubUsername;
    }
};