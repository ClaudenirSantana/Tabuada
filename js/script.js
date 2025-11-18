const multiplicationForm = document.querySelector(".form-tabuada");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#result-title span");
const multiplicationTable = document.querySelector("#operations");

// Funções
const createTable = (number, multiplicationNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicationNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
  <div class="operation">${number} x ${i} = </div>
  <div class="result">${result}</div>
  </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }
  multiplicationTitle.innerText = number;

  const totalRows = multiplicationTable.querySelectorAll(".row").length;

  if (totalRows > 10) {
    calculator.classList.add("large-operations");
  } else {
    calculator.classList.remove("large-operations");
  }
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;
  createTable(multiplicationNumber, multiplicatorNumber);
});
