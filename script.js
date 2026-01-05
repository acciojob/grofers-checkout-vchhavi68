const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(priceEl => {
    total += Number(priceEl.textContent);
  });

  // Remove old total row if it exists
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) {
    oldTotalRow.remove();
  }

  // Create new total row
  const table = document.getElementById("itemsTable");
  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Button click event
getSumBtn.addEventListener("click", getSum);
