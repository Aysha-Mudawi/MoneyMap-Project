console.log("MoneyMap is ready!");

const expenseForm = document.querySelector("#expense-form");

const expenseNameInput = document.querySelector("#expense-name");
const expenseAmountInput = document.querySelector("#expense-amount");
const expenseCategoryInput = document.querySelector("#expense-category");
const expenseDateInput = document.querySelector("#expense-date");

const expensesTableBody = document.querySelector("#expenses-table-body");
const totalSpendingElement = document.querySelector("#total-spending");

let totalSpending = 0;

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const amount = Number(expenseAmountInput.value);
  console.log(typeof amount);

  const expense = {
    name: expenseNameInput.value,
    amount: amount,
    category: expenseCategoryInput.value,
    date: expenseDateInput.value,
  };
  const expenseRow = document.createElement("tr");

  // Name
  const nameCell = document.createElement("td");
  nameCell.textContent = expense.name;
  expenseRow.appendChild(nameCell);

  // Amount
  const amountCell = document.createElement("td");
  amountCell.textContent = `$${expense.amount.toFixed(2)}`;
  expenseRow.appendChild(amountCell);

  // Category
  const categoryCell = document.createElement("td");
  categoryCell.textContent = expense.category;
  expenseRow.appendChild(categoryCell);

  // Date
  const dateCell = document.createElement("td");
  dateCell.textContent = expense.date;
  expenseRow.appendChild(dateCell);

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");

  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    expenseRow.remove();

    totalSpending -= expense.amount;

    totalSpendingElement.textContent = `$${totalSpending.toFixed(2)}`;
  });
  expenseForm.reset();
  deleteCell.appendChild(deleteButton);
  expenseRow.appendChild(deleteCell);

  expensesTableBody.appendChild(expenseRow);
  totalSpending += expense.amount;
  totalSpendingElement.textContent = `$${totalSpending.toFixed(2)}`;

  console.log(amount);
  console.log(expenseCategoryInput.value);
  console.log(expenseDateInput.value);
});
