const Form = (() => {

    const emailValidation = function () {
        const emailText = document.getElementById('email').value;

        if (validateEmail(emailText)) {
            document.getElementById('email').classList.remove('invalid')
        } else {
            document.getElementById('email').classList.add('invalid');
            window.alert('Invalid Email, must be in the following format: user@email.com');
        }
    };

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const confirmEmail = function () {
        const emailText = document.getElementById('email').value;

        const confirmEmailText = document.getElementById('email-confirm').value;

        if (emailText === confirmEmailText) {
            document.getElementById('email-confirm').classList.remove('invalid')
        } else {
            document.getElementById('email-confirm').classList.add('invalid');
            window.alert('Invalid Email, must match the first email field');
        }
    }

    const zipcodeValidation = function () {
        const zipcodeText = document.getElementById('zipcode').value;

        if (validateZipCode(zipcodeText)) {
            document.getElementById('zipcode').classList.remove('invalid')
        } else {
            document.getElementById('zipcode').classList.add('invalid');
            window.alert('Invalid Zipcode, please enter in a valid zipcode');
        }
    }

    function validateZipCode(zipcode) {
        var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
        return zipCodePattern.test(zipcode);

    }

    const confirmPassword = function () {
        const passwordText = document.getElementById('password').value;

        const passwordConfirmText = document.getElementById('password-confirm').value;

        if (passwordText === passwordConfirmText) {
            document.getElementById('password-confirm').classList.remove('invalid')
        } else {
            document.getElementById('password-confirm').classList.add('invalid');
            window.alert('Invalid password, must match the first password field');
        }
    };

    document.getElementById('email').addEventListener('focusout', emailValidation);
    document.getElementById('email-confirm').addEventListener('focusout', confirmEmail);
    document.getElementById('zipcode').addEventListener('focusout', zipcodeValidation);
    document.getElementById('password-confirm').addEventListener('focusout', confirmPassword);
})();
