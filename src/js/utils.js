const loading = document.querySelector('.js-loading');
const successMessage = document.querySelector('.js-success-message');
const errorMessage = document.querySelector('.js-error-message');

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

export { showLoadingIndicator, showSuccessMessage, showErrorMessage };
