const BASE_URL = "https://open.er-api.com/v6/latest/";

const btn = document.querySelector("button");
const fromCurr = document.querySelector("#from-currency");
const toCurr = document.querySelector("#to-currency");
const amount = document.querySelector(".amount input");
const msg = document.querySelector(".msg");

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}${fromCurr.value}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        const rate = data.rates[toCurr.value];
        const finalAmount = (amtVal * rate).toFixed(2);

        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Failed to fetch exchange rate";
        console.error(error);
    }
});

const fromCurrency = document.getElementById("from-currency");

for (let currencyCode in countryList) {
    const option = document.createElement("option");

    option.value = currencyCode;
    option.innerText = currencyCode;

    if (currencyCode === "USD") {
        option.selected = true;
    }

    fromCurrency.appendChild(option);

    fromCurrency.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const toCurrency = document.getElementById("to-currency");

for (let currencyCode in countryList) {
    const option = document.createElement("option");

    option.value = currencyCode;
    option.innerText = currencyCode;

    if (currencyCode === "PKR") {
        option.selected = true;
    }

    toCurrency.appendChild(option);

    toCurrency.addEventListener("change", (evt) => {
        updateFlags(evt.target);
    });
}

const updateFlags = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}