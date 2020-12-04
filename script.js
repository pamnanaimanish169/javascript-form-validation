function validateName(name) {
    console.log(name)
    console.log(document.getElementById('name').value)

    let re = /[A-Za-z -‘]$/;

    console.log( re.test(document.getElementById('name').value) )
    if (re.test(document.getElementById('name').value) == false) {
        let element = document.getElementById('name')
        element.style.border = 'solid red 2px';
        
        document.getElementById('name_error').style.display = 'block'
    } else {
        let element = document.getElementById('name')
        element.style.border = '1px solid #ccc'

        document.getElementById('name_error').style.display = 'none'
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
    } else {
        let element = document.getElementById('email')
        element.style.border = '1px solid #ccc'

        document.getElementById('email_error').style.display = 'none'
        document.getElementById('email_error_required').style.display = 'none'
    }
}

function validatePassword() {
    if (document.getElementById('password').value == '') {
        document.getElementById('password_required').style.display = 'block'
        let element = document.getElementById('password')
        element.style.border = 'solid red 2px'
    } else {
        document.getElementById('password_required').style.display = 'none'
        let element = document.getElementById('password')
        element.style.border = '1px solid #ccc'
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
    } else {
        document.getElementById('confirm_password_match').style.display = 'none'
        document.getElementById('confirm_password_required').style.display = 'none'
        let element = document.getElementById('confirm_password')
        element.style.border = '1px solid #ccc'
    }
}