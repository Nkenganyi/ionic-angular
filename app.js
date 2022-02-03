const expense = document.querySelector('#expense');
const amount = document.querySelector('#amount');
const cancelBtn = document.querySelector('#btn-cancel');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');


let total = 0;

const clear = () => {
    expense.value = '';
    amount.value = '';
};



addBtn.addEventListener('click', () => {
    const enteredExpense = expense.value;
    const enteredAmount = amount.value;

    if (
        enteredExpense.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0
    ) {
        alertCtrl.create({
            message: 'Please enter a valid reason and amount',
            header: 'Invalid Inputs',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredExpense + ': R' + enteredAmount;

    expensesList.appendChild(newItem);
    total += +enteredAmount;
    totalExpenses.textContent = total;
    clear();
});

cancelBtn.addEventListener('click', clear);