//***********VALIDATION FORM 

$(function () {
    $("form[name='registration']").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 10,
            }
        },
        messages: {
            name: {
                required: "Please enter your firstname",
                minlength: "Must be at least 2 characters long",
                maxlength: "Max 20 characters long"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                maxlength: "Your password must be max 10 characters long"
            },
            email: "Please enter a valid email address",
        },
        submitHandler: function (form) {
            form.submit();
            alert("Registrazione completata!")
        }
    });
});


//***********CHANGE NUMBERS 

window.addEventListener("load", change)

function getRandom (){
    return Math.floor(Math.random()*10000);
}

function change() {
    document.querySelector("#num1").textContent= getRandom();
    document.querySelector("#num2").textContent= getRandom();
    document.querySelector("#num3").textContent= getRandom();
}






