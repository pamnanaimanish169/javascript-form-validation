function validateName(name) {
    console.log(name)
    console.log(document.getElementById('name').value)

    let re = /[A-Za-z -‘]$/;

    console.log( re.test(document.getElementById('name').value) )
    if (re.test(document.getElementById('name').value) == false) {
        let element = document.getElementById('name')
        element.style.border = 'solid red 2px';
        
        document.getElementById('name_error').style.display = 'block'
        return false;
    } else {
        let element = document.getElementById('name')
        element.style.border = '1px solid #ccc'

        document.getElementById('name_error').style.display = 'none'
        return true;
    }
}

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(document.getElementById('email').value)
    console.log( re.test(document.getElementById('email').value) )
    if (document.getElementById('email').value == '') {
        document.getElementById('email_error_required').style.display = 'block'
        let element = document.getElementById('email')
        element.style.border = 'solid red 2px';
    } else if (re.test(document.getElementById('email').value) == false) {
        let element = document.getElementById('email')
        element.style.border = 'solid red 2px';
        
        document.getElementById('email_error').style.display = 'block'
        document.getElementById('email_error_required').style.display = 'none'
        return false;
    } else {
        let element = document.getElementById('email')
        element.style.border = '1px solid #ccc'

        document.getElementById('email_error').style.display = 'none'
        document.getElementById('email_error_required').style.display = 'none'
        return true;
    }
}

function validatePassword() {
    if (document.getElementById('password').value == '') {
        document.getElementById('password_required').style.display = 'block'
        let element = document.getElementById('password')
        element.style.border = 'solid red 2px'
        return false;
    } else {
        document.getElementById('password_required').style.display = 'none'
        let element = document.getElementById('password')
        element.style.border = '1px solid #ccc'
        return true;
    }
}

function validateConfirmPassword() {
    if (document.getElementById('confirm_password').value == '') {
        document.getElementById('confirm_password_required').style.display = 'block'
        let element = document.getElementById('confirm_password')
        element.style.border = 'solid red 2px'
    }  else if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
        document.getElementById('confirm_password_match').style.display = 'block'
        let element = document.getElementById('confirm_password')
        element.style.border = 'solid red 2px'
        return false;
    } else {
        document.getElementById('confirm_password_match').style.display = 'none'
        document.getElementById('confirm_password_required').style.display = 'none'
        let element = document.getElementById('confirm_password')
        element.style.border = '1px solid #ccc'
        return true;
    }
}

// Radio Buttons
function validateRadio(id) {
    if (document.getElementById(id).checked) {
        return true;
    } else {
        return false;
    }
}

// Validate Form
function validateForm(event) {
    // Prevent page from reloading
    event.preventDefault();

    // Check for errors
    let error = 0;
    let name = [];
    if(!validateName('name')) {
        document.getElementById('name_error').style.display = 'block'
        error++;
        name.push('name')
    }
    if (!validateEmail('email')) {
        document.getElementById('email_error').style.display = 'block'
        error++;
        name.push('email')
    }
    if (!validatePassword('password')) {
        document.getElementById('password').style.display = 'block'
        error++;
        name.push('password')
    }
    if (!validatePassword('confirm_password')) {
        document.getElementById('confirm_password_required').style.display = 'block'
        error++;
        name.push('confirm_password')
    }
    if (!validateConfirmPassword('confirm_password')) {
        document.getElementById('confirm_password_match').style.display = 'block'
        error++;
        name.push('confirm_password_match')
    }
    // Validation for radio button
    if (validateRadio('male')) {
        document.getElementById('gender_error').style.display = 'none'
    } 
    else if(validateRadio('female')) {
        document.getElementById('gender_error').style.display = 'none'
    }
    else {
        document.getElementById('gender_error').style.display = 'block'
        error++
        name.push('gender')
    }
    if(error > 0) {
        return false;
        document.getElementById('success').style.display = 'none'
    } else {
        document.getElementById('success').style.display = 'block'
        setTimeout(() => {
            window.location.reload()
        },2000)
    }
}