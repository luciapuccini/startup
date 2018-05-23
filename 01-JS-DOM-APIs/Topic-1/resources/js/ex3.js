/*Create a reusable function to perform AJAX calls.
 This function must accept a config object and return an ES6 Promise.*/
///create event listener
document.getElementById('getRepos').addEventListener('click', loadRepos);
//load github repositories
function loadRepos() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/repositories', true); //tried the ../search/repositories but cannot make it work
  xhr.onload = function() {
    if(this.status == 200) {
      var repos = JSON.parse(this.responseText);
      var output = '';
      for(var i in repos) {
        output += '<div>' + '<ul>' + '<li>ID:' + repos[i].id + '</li>' + '<li>NAME:' + repos[i].name + '</li>' + '<li>OWNER:' + repos[i].owner.url + '</li>' + '</ul>' + '</div>';
      }
      document.getElementById('repos').innerHTML = '<h2>Repositories list</h2>' + output;
    }
  }
  xhr.send();
}

function gitSearch() {
  let searchField = document.getElementById("searchField").value;
  let config = {
    url: 'https://api.github.com/search/repositories?q=' + searchField,
    method: 'GET',
    asy: true
  };

  function resolve(request) {
    let list = document.getElementById("list");
    let response = JSON.parse(request.response);
    let newLine, data;
    document.getElementById("repoSearch").style.border = "3px solid blue";
    list.innerHTML = "";
    response.items.map(function(item) {
      newLine = document.createElement("li");
      data = document.createTextNode(item.full_name);
      newLine.appendChild(data);
      list.appendChild(newLine);
    });
  };

  function reject() {
    alert("An error has ocurred, please try again");
    document.getElementById("repoSearch").style.border = "3px solid red";
  }
  ajaxCall(config).then(resolve, reject);
};
//reusable ajax call
function ajaxCall(urlConfig) {
  return new Promise(function(resolve, reject) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(urlConfig.method, urlConfig.url, urlConfig.asy);
    xhttp.send();
    xhttp.onload = function(event) {
      if(this.status == 200) {
        resolve(xhttp);
      } else {
        reject();
      }
    }
    xhttp.onerror = function() {
      document.getElementById("repoSearch").style.backgroundColor = "red";
      reject();
    }
  });
}