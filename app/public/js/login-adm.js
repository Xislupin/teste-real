// =========================================================
// LOGIN ADM | MOSTRAR SENHA
// =========================================================

const passwordInput = document.querySelector("#senha");
const passwordButton = document.querySelector(".login-adm-password-button");

if (passwordInput && passwordButton) {

    passwordButton.addEventListener("click", () => {

        const mostrandoSenha = passwordInput.type === "text";

        passwordInput.type = mostrandoSenha
            ? "password"
            : "text";

        passwordButton.innerHTML = mostrandoSenha
            ? '<ion-icon name="eye-outline"></ion-icon>'
            : '<ion-icon name="eye-off-outline"></ion-icon>';

        passwordButton.setAttribute(
            "aria-label",
            mostrandoSenha
                ? "Mostrar senha"
                : "Ocultar senha"
        );

    });

}


// =========================================================
// LOGIN ADM | PREENCHER DEMONSTRAÇÃO
// =========================================================

const fillButton = document.querySelector(".login-adm-fill");

if (fillButton) {

    fillButton.addEventListener("click", () => {

        const emailInput = document.querySelector("#email");

        if (emailInput) {
            emailInput.value = "admin@bioclicky.com.br";
        }

        if (passwordInput) {
            passwordInput.value = "Admin123";
        }

    });

}


// =========================================================
// LOGIN ADM | TEMA
// =========================================================

const lightButton = document.querySelector(".login-adm-theme-light");
const darkButton = document.querySelector(".login-adm-theme-dark");

if (lightButton && darkButton) {

    lightButton.addEventListener("click", () => {
        document.body.classList.add("login-adm-light");
    });


    darkButton.addEventListener("click", () => {
        document.body.classList.remove("login-adm-light");
    });

}