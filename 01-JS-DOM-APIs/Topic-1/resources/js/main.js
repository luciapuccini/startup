function callEvents() {
  let section = document.getElementById('section');
  document.getElementById('handle').onclick = function() {
    section.classList.toggle('fade');
  };
};
window.onload = function() {
  // i can do this:
  //element.classList.toggle('fade');
  // but for clarity
  callEvents();
};
document.getElementById('alert-btn').onclick = function() {
  alert('this is an alert! o_o');
};
//fetching data
/*document.getElementById('joke').addEventListener
('click', fGetText);
   function fGetText() {
      fetch('http://api.icndb.com/jokes/random')
      .then((res) => res.text())
      .then ((data) => {
          document.getElementById('section').innerHTML = data;
        })
          .catch((err) => console.log(err));
    };*/
// same with ajax
document.getElementById('joke').addEventListener('click', fGetText);

function fGetText() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random', true, );
  xhr.onload = function() {
    if(this.status == 200) {
      var users = JSON.parse(this.responseText);
      document.getElementById('section').innerHTML = this.responseText;
    }
  }
  xhr.send();
};