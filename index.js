
(function formInputs() {

    let formInputs = document.querySelectorAll('.form-input');

    for (const formInput of formInputs) {

        let inputs = formInput.querySelectorAll('input, textarea');

        for (const input of inputs) {
            input.addEventListener('change', () => {
                checkInputValue(formInput, input);
            });
            window.addEventListener('load', () => {
                checkInputValue(formInput, input);
            });
        }
    }
    function checkInputValue(formInput, input) {
        if (input.value != '') {
            formInput.classList.add('not-empty');
        }
        else {
            formInput.classList.remove('not-empty');
        }
    };    
})();


