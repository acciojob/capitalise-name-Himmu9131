//your JS code here. If required.
function capitalizeFName() {
    const inputField = document.getElementById("fname");
    const value = inputField.value;

    // Capitalize the value
    inputField.value = value.toUpperCase(); // Change to .toLowerCase() if lowercase required
}
const inputField = document.getElementById("fname");
inputField.addEventListener("blur", capitalizeFName);