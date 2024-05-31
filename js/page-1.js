window.addEventListener('DOMContentLoaded', function() {

    const BUTTON_START_CLASS = '.start__button.button';

    initializeButtons();

    /**
     * Ініціалізація кнопок
     */
    function initializeButtons() {
        var buttonStart = document.querySelector(BUTTON_START_CLASS);
        if (buttonStart != null) {
            buttonStart.addEventListener('click', function(event) {
                window.location.href = 'page-2.html';
            });
        }
    }

});