var popup = "";
var title = "";
var yesBtn = "";
var noBtn = "";
var wrapper = "";
function showButtonMsg(msg) {
    var message = msg.getAttribute("data-message");
    // alert("The " + animal.innerHTML + " is a " + animalType + ".");
}

window.onload = function () {

}

document.addEventListener("click", function () {
    wrapper = document.getElementById('wrapper');
    popup = document.getElementById('popup');
    title = document.getElementById('title');
    output = document.getElementById('output');
    yesBtn = document.getElementById('yesBtn');
    noBtn = document.getElementById('noBtn');
    yesBtn.onclick = closePopup;
    noBtn.onclick = closePopup;
    document.querySelectorAll("div.buttons > button").forEach(btn => {
        btn.onclick = () => {
            output.style.color = btn.dataset.color;
            showPopup(btn.dataset.message)

        }
        console.log(btn.dataset)
    })
});

function showPopup(msg) {
    wrapper.style.display = "block";
    popup.style.display = "block";
    title.innerHTML = msg
}

function closePopup() {
    wrapper.style.display = "none";
    popup.style.display = "none";
    output.innerHTML = "You just clicked " + event.target.innerHTML;

}