import GSheetProcessor from '../../node_modules/g-sheets-api/dist';
import { getCategories, getSubCategories, displayCategories, displaySubCategories } from './categories';
import { SCRIPT_URL, SHEET_ID } from './config';

const form = document.forms['submit-to-google-sheet'];
const loading = document.querySelector('.js-loading');
const successMessage = document.querySelector('.js-success-message');
const errorMessage = document.querySelector('.js-error-message');
const budgetObj = {};
const options = {
        sheetId: SHEET_ID,
        returnAllResults: true,
};

function showLoadingIndicator() {
        form.classList.add('is-hidden');
        loading.classList.remove('is-hidden');
}
function showSuccessMessage(response) {
        console.log('Success!', response);
        setTimeout(() => {
                successMessage.classList.remove('is-hidden');
                loading.classList.add('is-hidden');
        }, 500);
}
function showErrorMessage(error) {
        console.error('Error!', error.message);
        setTimeout(() => {
                errorMessage.classList.remove('is-hidden');
                loading.classList.add('is-hidden');
        }, 500);
}

form.addEventListener('submit', e => {
        e.preventDefault();
        showLoadingIndicator();
        fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form) })
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
const categorySwitch = document.querySelector('#switch');
const expenses = document.querySelector('#expenses');
const revenues = document.querySelector('#revenues');
categorySwitch.addEventListener('change', e => {
        expenses.classList = e.target.checked ? 'expenses' : 'expenses expenses--hidden';
        revenues.classList = e.target.checked ? 'revenues revenues--hidden' : 'revenues';
});
