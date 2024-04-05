import Card from "./Card.js";

const expensesDiv = document.querySelector("#expenses");

const addBudget = (budgetName, spent, total, id) => {
	expensesDiv.innerHTML += Card(budgetName, spent, total, id)[0];
	document.getElementById(`progressComplete${id}`).style.width = `${Card(budgetName, spent, total, id)[1]}%`;
	document.getElementById(`progressLeft${id}`).style.width = `${100 - Card(budgetName, spent, total, id)[1]}%`;
};

addBudget("nashe", 400, 2000, 1);
addBudget("food", 800, 2500, 2);
addBudget("groceries", 1000, 1500, 3);
