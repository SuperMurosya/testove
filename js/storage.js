const BLACK_LIST_STORAGE = 'blackListStorage';

/**
 * Додає ID користувача до списку заблокованих користувачів
 * @param userId
 * @returns {boolean}
 */
function addUserBlackList(userId) {
    var result = false;
    var sList = getUserBlackList();
    if (!isNaN(userId) && sList.indexOf(userId) == -1) {
        sList.push(userId);
        setStorage(BLACK_LIST_STORAGE, sList);
        result = true;
    }
    return result;
}

/**
 * Перелік заблокованих користувачів
 * @returns {*}
 */
function getUserBlackList() {
    return getStorage(BLACK_LIST_STORAGE, []);
}


/* Робота зі сховищем */

/**
 * Отримує дані зі сховища
 * @param name
 * @param returnIfNull
 */
function getStorage(name, returnIfNull) {
    var storage = sessionStorage.getItem(name);
    var result = returnIfNull;
    if (!isEmpty(storage)) {
        result = getIfNull(JSON.parse(storage), returnIfNull);
    }
    return result;
}


/**
 * Записывает данные в хранилище
 * @param name
 * @param value
 */
function setStorage(name, value) {
    if (value != null && !isJsonString(value)) {
        value = JSON.stringify(value);
    }
    return sessionStorage.setItem(name, value);
}

/**
 * Чи пуста сутність
 * @param entity
 * @returns {boolean}
 */
function isEmpty(entity) {
    var result = false;
    if (entity == undefined || entity == null || entity === '' || typeof entity == 'undefined' || entity == 'undefined' || (Array.isArray(entity) && entity.length == 0 && Object.keys(entity).length == 0)) {
        result = true;
    }
    return result;
}

/**
 * Обробка даних
 * @param data
 * @param returnIfNull
 * @returns {*}
 */
function getIfNull(data, returnIfNull) {
    var result = data;
    if (returnIfNull != undefined) {
        if (result == null) {
            result = returnIfNull;
        }
        if (Array.isArray(returnIfNull) && !Array.isArray(result) && !isNaN(result)) {
            result = [result];
        }
    }
    return result;
}

/**
 * Чи є строка JsonString
 * @param str
 * @returns {boolean}
 */
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
