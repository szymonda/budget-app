import GSheetProcessor from '../../node_modules/g-sheets-api/dist';
import { getCategories, getSubCategories, displayCategories, displaySubCategories } from './categories';
import { EXTENSES_SCRIPT_URL, REVENUES_SCRIPT_URL, CATEGORIES_SHEET_ID } from './config';
import { showErrorMessage, showLoadingIndicator, showSuccessMessage } from './utils.js';

const expensesForm = document.forms['expenses-form'];
const revenuesForm = document.forms['revenues-form'];
const categorySwitch = document.querySelector('#switch');
const budgetObj = {};
const options = {
        sheetId: CATEGORIES_SHEET_ID,
        returnAllResults: true,
};

expensesForm.addEventListener('submit', e => {
        e.preventDefault();
        showLoadingIndicator(expensesForm);
        fetch(EXTENSES_SCRIPT_URL, { method: 'POST', body: new FormData(expensesForm) })
                .then(response => showSuccessMessage(response))
                .catch(error => showErrorMessage(error));
});

revenuesForm.addEventListener('submit', e => {
        e.preventDefault();
        showLoadingIndicator(revenuesForm);
        fetch(REVENUES_SCRIPT_URL, { method: 'POST', body: new FormData(revenuesForm) })
                .then(response => showSuccessMessage(response))
                .catch(error => showErrorMessage(error));
});

GSheetProcessor(options, results => {
        getCategories(results, budgetObj);
        getSubCategories(results, budgetObj);
        displayCategories(budgetObj);
        displaySubCategories(budgetObj);
});

// Switching between expenses and revenues.
categorySwitch.addEventListener('change', e => {
        expensesForm.classList = e.target.checked ? 'expenses-form expenses-form--hidden' : 'expenses-form';
        revenuesForm.classList = e.target.checked ? 'revenues-form' : 'revenues-form revenues-form--hidden';
});
