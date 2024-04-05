const Card = (budgetName, spent, total) => {
	return `
    <div class="card border-solid border-black border-2 m-20 px-16 py-4 w-[30rem] rounded-sm">
        <div class="titleFlex flex flex-row justify-around mb-4 items-end">
            <div class="budgetName text-3xl">${budgetName}</div>
            <div class="budget">
                <span class="spent text-xl">₹ ${spent} </span>
                <span class="slash opacity-50">/</span>
                <span class="total text-lg">₹ ${total}</span>
            </div>
        </div>
        <div class="progressBar w-full border-black border-2 rounded-2xl mb-4">&nbsp;</div>
        <div class="buttonsFlex flex justify-around">
            <div class="addExpense">
                <button class="border-2 border-indigo-500 text-indigo-500 p-2 rounded-lg">Add Expense</button>
            </div>
            <div class="viewExpense">
                <button class="border-2 border-stone-700 text-stone-700 p-2 rounded-lg">View Expenses</button>
            </div>
        </div>
    </div>
    `;
};

export default Card;
