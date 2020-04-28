/*for sign up and log in fields validation*/ 
function validateFields(mod)
{
    var userMail = document.getElementById("inpEmail");
    if(!userMail.validity.valid) { alert("Invalid Email Address"); return false;}
    var userPassword = document.getElementById("inpPassword").value;
	var confirmationPassword = document.getElementById("inpConPassword").value;
	if(mod=="signUp" && userPassword != confirmationPassword) {alert("The passwords dosen't match!"); return false;}
    var errors = [];
    if (userPassword.length < 6) { errors.push("Your password must contain at least 6 characters."); }
    if (userPassword.search(/[a-z]/) < 0) { errors.push("Your password must contain at least one lower case character."); }
    if (userPassword.search(/[A-Z]/) < 0) { errors.push("Your password must contain at least one upper case character."); }
    if (userPassword.search(/[0-9]/) < 0) { errors.push("Your password must contain at least one digit."); }
    if (userPassword.search(/[\!\@\#\$\%\^&\*\(\)\-\_\=\+\\\|\[\]\{\}\;\:\/\?\.\>\<]/) < 0) { errors.push("Your password must contain at least one special character."); }
    if (errors.length > 0) { alert(errors.join("\n")); return false; }
    else { alert(userMail.value + "\n" + userPassword); return true; }
}
/*for contact us fields validation*/
function validateSuportFields()
{
    var userFullName = document.getElementById("name").value;
    if(userFullName.length == 0) { alert("Please fill your name"); return false;}
    var userMail = document.getElementById("email");
    if(!userMail.validity.valid) { alert("Invalid Email Address"); return false;}
    var selectedSubject = document.getElementById("subject").value;
    if(selectedSubject == "Select Subject") {alert("Please select subject"); return false;}
    var userComment = document.getElementById("comment").value;
    if(userComment.length == 0) { alert("Please fill your message"); return false;}
    else { alert(userFullName + "\n" + userMail.value + "\n" + selectedSubject + "\n" + userComment); return true; }
}

// show password
function showPassword()
{
    switch (document.getElementById("inpPassword").type)
    {
        case "password":
            document.getElementById("inpPassword").type = "text";
            break;
        case "text":
            document.getElementById("inpPassword").type = "password";
            break;
    }

}        