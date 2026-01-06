 function calculateTotal() {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
      total += Number(price.innerText);
    });

    document.getElementById("ans").innerText = total;
  }