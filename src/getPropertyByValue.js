/**
 * @param {object} list the list of objects or object.
 * @param {string} keyName name of the property to search for.
 * @param {boolean} unique sets the unique or not for the result list.
 * */
export const getPropertyByValue = (list, keyName, unique)  => {
    let result = [];

    if (!keyName) {
        return null;
    }

    const keys = keyName.split(".");

    if (typeof (list) === "object" && !Array.isArray(list)) {
        result = helper({...list}, keys);
    } else {
        for (let obj of [...list]) {
            result.push(helper(obj, keys));
        }
    }

    if (unique && Array.isArray(list)) {
        result = [...new Set(result)];
    }

    return result;
}

/**
 * @param {object} obj the object to search property.
 * @param {array} keys list of nested keys of the object to search on.
 * */
const helper = (obj, keys) => {
    if (!keys.length) {
        return obj;
    }

    let result = null;

    if (typeof (obj) === "object" && !Array.isArray(obj)) {
        for (let key of keys) {
            if (obj[key]) {
                result = helper(obj[key], keys.slice(1, keys.length));
            } else {
                break;
            }
        }
    }
    return result;
};