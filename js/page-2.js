window.addEventListener('DOMContentLoaded', function () {

    const FORM_SELECTOR = '#createProfileForm';
    const INPUT_CHECK_LIST = ['fname', 'yname', 'lname'];
    const BUTTON_CREATE_PROFILE_CLASS = '.create-profile.start__button.button';

    initializeFormSubmit();

    function initializeFormSubmit() {
        window.captureEvents(Event.SUBMIT);
        window.onsubmit = checkForm;
    }

    function checkForm() {
        var i;
        var result = true;

        for (i = 0; i < INPUT_CHECK_LIST.length; i++) {
            var inputCheck = document.querySelector('#'.concat(INPUT_CHECK_LIST[i]));
            if (inputCheck != null) {
                if (!(/^([a-zA-Z]*)$/.test(inputCheck.value))) {
                    result = false;
                    inputCheck.style.borderColor = 'red';


                   alert('Only Latin characters');

                //  inputCheck.outerHTML = inputCheck.outerHTML + "<span class='form-error'>Only Latin characters</span>";
                    // console.log(inputCheck.innerHTML = inputCheck.innerHTML + "<span>Only Latin characters</span>");
                    
                    break;
                } else {
                    inputCheck.style.borderColor = '#999999';
                }
            }
        }

        if (result) {
            var form = document.querySelector(FORM_SELECTOR);
            /*            form.submit(); */
            return window.location.href = 'page-3.html';
        } else {
            return result;
        }
    }


});