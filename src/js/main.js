"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () {
      navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
         // Registration was successful
         console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
         // registration failed :(
         console.log('ServiceWorker registration failed: ', err);
      });
   });
}

// place your code below

//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx2av-PiRinHAjnqgg0zGG_QIDVd0aej26mA_VAhMzLTz2CP-hVqIVtY_zn_nNLWO3VmcusBNdogM_/pubhtml
const scriptURL = 'https://script.google.com/macros/s/AKfycbyei06zM10KZY2xLKd8AuK5Bn189cqL_KDmnAC_DJBkMmKxv1s/exec'
const form = document.forms['submit-to-google-sheet']
const loading = document.querySelector('.js-loading')
const successMessage = document.querySelector('.js-success-message')
const errorMessage = document.querySelector('.js-error-message')
form.addEventListener('submit', e => {
   e.preventDefault()
   showLoadingIndicator()
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => showSuccessMessage(response))
      .catch(error => showErrorMessage(error))
})
function showLoadingIndicator() {
   form.classList.add('is-hidden')
   loading.classList.remove('is-hidden')
}
function showSuccessMessage(response) {
   console.log('Success!', response)
   setTimeout(() => {
      successMessage.classList.remove('is-hidden')
      loading.classList.add('is-hidden')
   }, 500)
}
function showErrorMessage(error) {
   console.error('Error!', error.message)
   setTimeout(() => {
      errorMessage.classList.remove('is-hidden')
      loading.classList.add('is-hidden')
   }, 500)
}

import GSheetProcessor from "../../node_modules/g-sheets-api/dist"

// test Sheet url
const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg/edit?usp=sharing';

// test sheet id

//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx2av-PiRinHAjnqgg0zGG_QIDVd0aej26mA_VAhMzLTz2CP-hVqIVtY_zn_nNLWO3VmcusBNdogM_/pubhtml
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx2av-PiRinHAjnqgg0zGG_QIDVd0aej26mA_VAhMzLTz2CP-hVqIVtY_zn_nNLWO3VmcusBNdogM_/pubhtml
const demoSheetId = '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg';
const mySheetId = '19sGpOe2AVgdAoB7uwNVvbM8QBxkjh3sEIqy1-AdsCPk';
const options = {
   sheetId: mySheetId,
   returnAllResults: true,
   // filter: {
   //    'department': 'archaeology'
   // }
}

GSheetProcessor(options, results => {
   console.log(results);
   const categories = results[0]
   const categoriesArray = Object.values(categories);
   console.log(categoriesArray);
   const categorySelect = document.querySelector("#categories");
   categoriesArray.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
   })





});