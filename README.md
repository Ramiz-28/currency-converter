# Currency Converter

A simple and responsive Currency Converter built using HTML, CSS, and JavaScript. It allows users to convert between multiple world currencies using real-time exchange rates.

## Features

* Convert between 150+ currencies
* Real-time exchange rates
* Dynamic country flags
* Currency swap functionality
* Responsive and clean user interface
* Fetch API with Async/Await
* Error handling for failed requests

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* ExchangeRate API
* Flags API

## Project Structure

```text
currency-converter/
│
├── index.html
├── style.css
├── index.js
├── codes.js
└── README.md
```

## How It Works

1. Enter an amount.
2. Select the source currency.
3. Select the target currency.
4. Click **Get Exchange Rate**.
5. The converted amount is displayed instantly.

## APIs Used

### Exchange Rate API

Used to fetch real-time currency exchange rates.

```javascript
const BASE_URL = "https://open.er-api.com/v6/latest/";
```

### Flags API

Used to display country flags based on the selected currency.

```javascript
https://flagsapi.com/{COUNTRY_CODE}/flat/64.png
```

## Learning Outcomes

This project helped me practice:

* DOM Manipulation
* Event Handling
* Loops and Objects
* Fetch API
* Async/Await
* Error Handling
* Dynamic UI Updates

## Live Demo

Add your Vercel deployment link here:

```text
https://currency-converter.vercel.app
```

## Author

Rameez Shakil

---

Feel free to fork, modify, and improve this project.
