const form = document.getElementById('studentform');
const password = document.getElementById('password');
const cnfPassword = document.getElementById('cnf-password');
const pswdError = document.getElementById('password-error');

form.addEventListener('submit', (event) => {
    const pswd = password.value;
    const cnfPswd = cnfPassword.value;
    if(pswd !== cnfPswd) {
        pswdError.hidden = false;
        event.preventDefault();
    }
});