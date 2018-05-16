
function callEvents() {
  var slideSource = document.getElementById('slideSource');
  document.getElementById('handle').onclick = function () {
    slideSource.classList.toggle('fade');
  };
};

window.onload = function() {
  // i can do this:
  //element.classList.toggle('fade');
  // but for clarity
  callEvents();

  };
