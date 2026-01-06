const button = document.querySelector("button");

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    sum += Number(price.textContent);
  });

  document.getElementById("ans").textContent = sum;
});


// Button click event
getSumBtn.addEventListener("click", getSum);
