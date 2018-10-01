/**
 * @param {object} list the list of objects or object.
 * @param {string} keyName name of the property to search for.
 * */
function getPropertyByValue(list, keyName){
    let result = [];

    if(!keyName){
        return null;
    }

    const keys = keyName.split(".");

    if(typeof (list) === "object" && !Array.isArray(list)){
        result = helper(list, keys);
    }else {
        for(let obj of list){
            result.push(helper(obj, keys));
        }
    }

    return result;
}

/**
 * @param {object} obj the object to search property.
 * @param {array} keys list of nested keys of the object to search on.
 * */
function helper(obj, keys){
    if(!keys.length){
        return obj;
    }

    let result = null;

    if(typeof (obj) === "object" && !Array.isArray(obj)){
        for(let key of keys) {
            if(obj[key]){
                result = helper(obj[key], keys.slice(1,keys.length));
            }else {
                break;
            }
        }
    }
    return result;
}

exports = {
    getPropertyByValue: getPropertyByValue
};