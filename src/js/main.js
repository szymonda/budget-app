import GSheetProcessor from '../../node_modules/g-sheets-api/dist';
import { getCategories, getSubCategories, displayCategories, displaySubCategories } from './categories';
import { SCRIPT_URL, SHEET_ID } from './config';
import { showErrorMessage, showLoadingIndicator, showSuccessMessage } from './utils.js';

const expensesForm = document.forms['expenses-form'];
const revenuesForm = document.forms['revenues-form'];
const categorySwitch = document.querySelector('#switch');
const budgetObj = {};
const options = {
        sheetId: SHEET_ID,
        returnAllResults: true,
};

expensesForm.addEventListener('submit', e => {
        e.preventDefault();
        showLoadingIndicator(expensesForm);
        fetch(SCRIPT_URL, { method: 'POST', body: new FormData(expensesForm) })
                .then(response => showSuccessMessage(response))
                .catch(error => showErrorMessage(error));
});

GSheetProcessor(options, results => {
        getCategories(results, budgetObj);
        getSubCategories(results, budgetObj);
        displayCategories(budgetObj);
        displaySubCategories(budgetObj);
});

// Getting actual date for date picker.
Date.prototype.toDateInputValue = function() {
        const local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
};

const datePicker = document.querySelector('#datePicker');
datePicker.value = new Date().toDateInputValue();

// Switching between expenses and revenues.
categorySwitch.addEventListener('change', e => {
        expensesForm.classList = e.target.checked ? 'expenses-form expenses-form--hidden' : 'expenses-form';
        revenuesForm.classList = e.target.checked ? 'revenues-form' : 'revenues-form revenues-form--hidden';
});
