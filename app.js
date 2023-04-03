var btn = document.getElementById("btn1");
var ta = document.getElementById("ta");
var qe = document.getElementById("qe");

function ansCheck() {
  var ans = ta.value;
        //get from server and set value to ta

        fetch("https://api.tin12q.live" + "/" + ans)
          .then((response) => {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error(`Request failed with status ${response.status}`);
            }
          })
          .then((data) => {
            qe.value = data;
          })
          .catch((error) => {
            ta.value = error.message;
          });
}
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting and reloading the page
  // do something with the form data, such as send it to the server
  ansCheck();
});