const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.innerText);
  });

  const table = document.getElementById("groceryTable");
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.colSpan = 2;
  cell.innerText = "Total Price: " + total;

  row.appendChild(cell);
  table.appendChild(row);