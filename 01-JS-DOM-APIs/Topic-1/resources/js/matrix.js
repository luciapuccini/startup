function inputTable() {
  return [
    ['Kevin Davisson', 'Hanna Sharpton', 'Latashia Schenkel', 'Darla Cook'],
    ['Benjamin Rico', 'Rosanne Glaze', 'Merle Schlueter', 'Annemarie Truehart'],
    ['Starr Meadow', 'Monique Scrivens', 'Ward Connor', 'Lee Prieto']
  ];
}

function generateTable() {
  let input = inputTable();
  let table = document.createElement("table");
  let tblBody = document.createElement("tbody");
  let row, col;
  input.map(function(subarray) {
    row = document.createElement("tr");
    subarray.map(function(value) {
      col = document.createElement("td")
      col.appendChild(document.createTextNode(value));
      row.appendChild(col);
    });
    tblBody.appendChild(row);
  });
  // append the <tbody> inside the <table>
  table.appendChild(tblBody);
  // table border attribute to
  table.setAttribute("border", "2");
  document.getElementById("table").appendChild(table);
  // changes border;
  table.setAttribute("border", "4");
}