function Validation() {
    var mail = document.getElementById("email").value;
    var pd = document.getElementById("pwd").value;

    if (mail == "") {
        alert("Enter Email");
    }
    if (pd == '') {
        alert("Enter pwd");
    }
}