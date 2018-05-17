document.getElementById('tableBtn').addEventListener('click', generate_tabla);
function generate_tabla() {
  // get the body id
  var body = document.getElementsByTagName("body")[0];
  // Create <table> and <tbody>
  var table = document.createElement("table");
  var tblBody = document.createElement("tbody");
  // Create cell
  for (var i = 0; i < 5; i++) {
    // Create rows
    var row = document.createElement("tr");
    for (var j = 0; j < 10; j++) {
      // Create  <td> and text node,
      //puts node in <td>,
      // and <td> goes to the end
      var cell = document.createElement("td");
      var textcell = document.createTextNode("Row n° " + i + ", Column n°" + j);
      cell.appendChild(textcell);
      row.appendChild(cell);
    }
    // add row to the end of table (end of tblbody)
    tblBody.appendChild(row);
  }
  // puts <tbody> under <table>
  table.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(table);
  // changes border;
  table.setAttribute("border", "2");
}
