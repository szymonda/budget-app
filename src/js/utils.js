const loading = document.querySelector('.js-loading');
const successMessage = document.querySelector('.js-success-message');
const errorMessage = document.querySelector('.js-error-message');
const datePicker = document.querySelector('#datePicker');

function showLoadingIndicator(form) {
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

// Getting actual date for date picker.
Date.prototype.toDateInputValue = function() {
        const local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
};
datePicker.value = new Date().toDateInputValue();

export { showLoadingIndicator, showSuccessMessage, showErrorMessage };
