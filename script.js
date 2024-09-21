const resultElement = document.querySelector("#result");
const calculateElement = document.querySelector("#calculate");
const inputElement = document.querySelector("#input");
const totalBillElement= document.querySelector ("#total");

calculateElement.addEventListener("click",calculateTip)
// console.log(inputElement);

function calculateTip(){
  let billAmount = parseFloat(inputElement.value);
  let tipAmount = ( (billAmount* .15).toFixed(2))
  console.log(billAmount);
  console.log((billAmount* .15).toFixed(2));
  console.log((billAmount * .15) +  billAmount)

  resultElement.innerHTML = `You should tip$${tipAmount}`;
  totalBillElement.innerHTML = "Your total bill will be $ " + ((billAmount * .15) +  billAmount).toFixed(2);
}



