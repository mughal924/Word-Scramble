var secretWord =  "secret";
document.getElementById("user-input").value = "";
document.getElementById("result").value = "";
function Submit() {
    var userInput = document.getElementById("user-input").value;
    var result = document.getElementById("result");
    if (userInput.toLowerCase() === secretWord.toLowerCase()) {
        result.innerHTML = "Correct ✔️ ";
        gsap.fromTo(result, {opacity: 0}, {opacity: 1, duration: 1});
    } else {
        result.innerHTML = "Incorrect ❌, try again.";
        gsap.fromTo(result, {opacity: 0}, {opacity: 1, duration: 1});
    }
    
}
