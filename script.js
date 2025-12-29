const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll('.price');
  
  
  let total = 0;
  priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.textContent) || 0;
  });

  
  const previousTotalRow = document.querySelector('.total-row');
  if (previousTotalRow) previousTotalRow.remove();

  
  const table = document.querySelector('table');
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row'); 

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; 
  totalCell.style.fontWeight = 'bold';
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};


getSumBtn.addEventListener("click", getSum);

