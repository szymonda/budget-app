import GSheetProcessor from '../../node_modules/g-sheets-api/dist';
import { getCategories, getSubCategories, displayCategories, displaySubCategories } from './categories';
import { SCRIPT_URL, SHEET_ID } from './config';
import { showErrorMessage, showLoadingIndicator, showSuccessMessage } from './utils.js';

const form = document.forms['submit-to-google-sheet'];
const budgetObj = {};
const options = {
        sheetId: SHEET_ID,
        returnAllResults: true,
};

form.addEventListener('submit', e => {
        e.preventDefault();
        showLoadingIndicator(form);
        fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form) })
                .then(response => showSuccessMessage(form, response))
                .catch(error => showErrorMessage(form, error));
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
const categorySwitch = document.querySelector('#switch');
const expenses = document.querySelector('#expenses');
const revenues = document.querySelector('#revenues');
categorySwitch.addEventListener('change', e => {
        expenses.classList = e.target.checked ? 'expenses' : 'expenses expenses--hidden';
        revenues.classList = e.target.checked ? 'revenues revenues--hidden' : 'revenues';
});
