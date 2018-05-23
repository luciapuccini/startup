//ex 4
///create event listener
document.getElementById('getRepos').addEventListener('click', loadRepos);
//load github repositories
function loadRepos() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/repositories', true); //tried the ../search/repositories but cannot make it work
  xhr.onload = function() {
    if (this.status == 200) {
      var repos = JSON.parse(this.responseText);
      var output = '';
      for (var i in repos) {
        output +=
          '<div>' +
          '<ul>' +
          '<li>ID:' + repos[i].id + '</li>' +
          '<li>NAME:' + repos[i].name + '</li>' +
          '<li>OWNER:' + repos[i].owner.url + '</li>' +
          '</ul>' +
          '</div>';
      }
      document.getElementById('repos').innerHTML = '<h2>Repositories list</h2>' + output;
    }
  }
  xhr.send();
}
//Add an input with type="text" to perform a search
//search function
document.getElementById('search').addEventListener('click', searchRepo);

function searchRepo() {
  var myRepo = document.getElementById('myRepo');
  console.log('searching:' + myRepo.value);
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/repositories', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var repos = JSON.parse(this.responseText);
      var output = '';
      for (var i in repos) {
        if (repos[i].name == myRepo.value) {
          output = repos[i];
        }
      }
    }
    document.getElementById('result').innerHTML =
      '<div class="izq">' +
      '<h2>Search Result</h2>' +
      '<p>' + Object.values(output) + '</p>' +
      '</div>'
  }
  xhr.send();
}
