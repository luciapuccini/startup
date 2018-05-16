function callEvents()
{
  let slideSource = document.getElementById('slideSource');
  document.getElementById('handle').onclick = function ()
  {
    slideSource.classList.toggle('fade');
  };
};
window.onload = function()
{
  // i can do this:
  //element.classList.toggle('fade');
  // but for clarity
  callEvents();
};
document.getElementById('alert-btn').onclick =function()
{
alert('this is an alert! o_o');
};
//fetching data
document.getElementById('joke').addEventListener
  ('click', fGetText);
   function fGetText()
    {
      fetch('http://api.icndb.com/jokes/random')
      .then((res) => res.text())
      .then ((data) =>
        {
          document.getElementById('slideSource').innerHTML = data;
        })
          .catch((err) => console.log(err))
            {

            };
    };
