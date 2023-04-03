// Description: This file contains the JavaScript code for the app
var btn = document.getElementById("btn1");
var ta = document.getElementById("ta");
var qe = document.getElementById("qe");

// Define a function to hash a password with SHA-256
function hashPassword(password) {
  // Hash the password using SHA-256 algorithm
  const hash = CryptoJS.SHA256(password);

  // Convert the hash to a hexadecimal string
  const hexHash = hash.toString(CryptoJS.enc.Hex);

  return hexHash;
}
const ans = "this is a very long string that is not a palindrome ";
function ansCheck() {
  var ans = ta.value;
  const yourSite = "https://api.yoursite.com";
  const hash = hashPassword(ans);
  //get from server and set value to ta

  fetch(yourSite + "/" + hash + "/3")
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    })
    .then((data) => {
      window.location.href = data;
    })
    .catch((error) => {
      window.location.href = "https://yoursite.com/lost";
    });
}
const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting and reloading the page
  // do something with the form data, such as send it to the server
  ansCheck();
});
ta.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});
