window.addEventListener('DOMContentLoaded', function() {

    const BUTTON_BLOCK_ITEM_CLASS = '.all-members__block-button';
    const BUTTON_BLOCK_POPUP_CLASS = '.popup-1__block-button';
    const BUTTON_CLOSE_POPUP_CLASS = '.popup-1__close-button';
    var currentMemberItem = null;

    initializeButtons();
    checkBlackUserList();

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
                    if (getUserId(currentMemberItem)) {
                        addUserBlackList(getUserId(currentMemberItem));
                    }
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
     * Перевіряє заблокованих користувачів
     */
    function checkBlackUserList() {
        var i;
        var userBlackList = getUserBlackList();
        var userList = document.querySelectorAll('.all-members__item');

        for (i = 0; i < userList.length; i++) {
            if (userBlackList.indexOf(getUserId(userList[i])) != -1) {
                userList[i].outerHTML = '';
            }
        }
    }

    /**
     * Отримує ID користувача
     * @param item
     * @returns {*}
     */
    function getUserId(item) {
        var result = null;
        if (item != null && item.hasAttribute('userId')) {
            result = parseInt(item.getAttribute('userId'));
        }
        return result;
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