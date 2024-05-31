window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    const TAB_LIST_CLASS = '.tabs__title';
    const TAB_CONTENT_LIST_CLASS = '.tabs__body';
    const TAB_LIST_ACTIVE = '_tab-active';
    const TAB_CONTENT_ACTIVE = 'show';
    const TAB_CONTENT_INACTIVE = 'hide';

    var tabList = document.querySelectorAll(TAB_LIST_CLASS);
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener('click', function(event) {
            deactivateTabList();
            this.classList.add(TAB_LIST_ACTIVE);
            hideAllTabContent();
            console.log(getCurrentTabNumber());
            showCurrentTabContent(getCurrentTabNumber());
        });
    }

    if (tabList.length > 0) {
        tabList[0].click();
    }

    /**
     * Зняти відмітку про активний пункт меню
     */
    function deactivateTabList() {
        var tabList = document.querySelectorAll(TAB_LIST_CLASS);
        for (var i = 0; i < tabList.length; i++) {
            tabList[i].classList.remove(TAB_LIST_ACTIVE);
        }
    }

    /**
     * Робимо невидимим увесь контент
     */
    function hideAllTabContent() {
        var tabContent = document.querySelectorAll(TAB_CONTENT_LIST_CLASS);
        for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove(TAB_CONTENT_ACTIVE);
            tabContent[i].classList.add(TAB_CONTENT_INACTIVE);
        }
    }

    /**
     * Показуємо вказаний контент
     * @param {} i 
     */
    function showCurrentTabContent(i) {
        var tabContent = document.querySelectorAll(TAB_CONTENT_LIST_CLASS);
        if (i >= 0 && i < tabContent.length) {
            console.log(tabContent[i]);
            tabContent[i].classList.remove(TAB_CONTENT_INACTIVE);
            tabContent[i].classList.add(TAB_CONTENT_ACTIVE);
        }
    }

    /**
     * Отримати номер активної вкладки
     * @returns int
     */
    function getCurrentTabNumber() {
        var result = null;
        var tabList = document.querySelectorAll(TAB_LIST_CLASS);
        for (var i = 0; i < tabList.length; i++) {
            if (tabList[i].classList.contains(TAB_LIST_ACTIVE)) {
                result = i;
                break;
            }
            
        }
        return result;
    }

/*
    header.addEventListener('click', function(event) {
        var tab = document.querySelectorAll(TAB_LIST_CLASS);
        for(var i = 0; i < tab.length; i++) {
            tab[0].classList.remove(TAB_LIST_ACTIVE);
        }
        let target = event.target;
        if (target && target.classList.contains('navigation-career__title')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    // tab[0].classList.remove(TAB_LIST_ACTIVE);
                    // tab[i].classList.add(TAB_LIST_ACTIVE);
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
    */
});