const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", function () {

    message.textContent = "Welcome to Phone It!";

});


function showName() {
    let name =
    document.getElementById("name").value;

    alert(name)
}