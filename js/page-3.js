window.addEventListener('DOMContentLoaded', function() {

    const BUTTON_BLOCK_ITEM_CLASS = '.all-members__block-button';
    const BUTTON_BLOCK_POPUP_CLASS = '.popup-1__block-button';
    const BUTTON_CLOSE_POPUP_CLASS = '.popup-1__close-button';
    var currentMemberItem = null;

    initializeButtons();

    /**
     * Ініціалізація кнопок
     */
    function initializeButtons() {
        var i;
        var buttonBlockItemList = document.querySelectorAll(BUTTON_BLOCK_ITEM_CLASS);
        for (i = 0; i < buttonBlockItemList.length; i++) {
            buttonBlockItemList[i].addEventListener('click', function(event) {
                setCurrentMemberItem(this.parentNode.parentNode);
            });
        }

        var buttonBlockPopup = document.querySelector(BUTTON_BLOCK_POPUP_CLASS);
        if (buttonBlockPopup != null) {
            buttonBlockPopup.addEventListener('click', function(event) {
                var currentMemberItem = getCurrentMemberItem();
                if (currentMemberItem != null) {
                    currentMemberItem.outerHTML = '';
                }
                var buttonClosePopup = document.querySelector(BUTTON_CLOSE_POPUP_CLASS);
                if (buttonClosePopup != null) {
                    buttonClosePopup.click();
                }
            });
        }
    }

    /**
     * Встановлює блок для поточного користувача
     * @param item
     * @returns {*}
     */
    function setCurrentMemberItem(item) {
        if (item != null) {
            currentMemberItem = item;
        }
        return currentMemberItem;
    }

    /**
     * Повертая блок для поточного користувача
     * @returns {*}
     */
    function getCurrentMemberItem() {
        return currentMemberItem;
    }

});