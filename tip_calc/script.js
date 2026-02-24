const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("btn");
const total = document.getElementById("total");

btn.addEventListener("click", calc)

function calc(){

    const billValue = Number(bill.value);
    const tipValue = Number(tip.value);

    const x = billValue + (tipValue*billValue)/100;
    total.innerText = `Total: ₹${x.toFixed(2)}`;
}