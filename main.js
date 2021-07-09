const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1,
  },
  usd: {
    usd: 1,
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5,
  },
  krw: {
    usd: 0.00084,
    krw: 1,
    eur: 0.00075,
    vnd: 19.47,
  },
  eur: {
    usd: 1.13,
    krw: 1348.77,
    eur: 1,
    vnd: 26135.96,
  },
};

function getConversionRate(from, to) {
  return currencyRatio[from][to];
}

let convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", changeMoney);

function changeMoney() {
  // select input
  let amountInput = document.getElementById("amountInput");

  // get value from input
  let result = amountInput.value;

  //select
  let fromCurrency = document.getElementById("fromCurrencyList");

  //get value from the select tag
  let toCurrency = document.getElementById("toCurrencyList");

  //use the values from fromCurrencyList and toCurrencyList to get the conversionRate
  let conversionRate = getConversionRate(fromCurrency.value, toCurrency.value);

  //calculate the result exchange money
  let convertedAmount = result * conversionRate;

  document.getElementById(
    "result"
  ).innerHTML = `Converted currency is ${convertedAmount.toFixed(2)}`;
}

console.log("test");
