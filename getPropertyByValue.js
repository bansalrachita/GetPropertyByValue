/**
 * @param {object} list the list of objects or object.
 * @param {string} keyName name of the property to search for.
 * */
function getPropertyByValue(list, keyName){
    let result = [];

    if(!keyName){
        return null;
    }

    if(typeof (list) === "object" && !Array.isArray(list)){
        result = helper(list, keyName);
    }else {
        for(let obj of list){
            result.push(helper(obj, keyName));
        }
    }

    return result;
}

/**
 * @param {object} obj the object to search property.
 * @param {string} keyName name of the property to search for.
 * */
function helper(obj, keyName){
    let result = null;

    if(typeof (obj) === "object" && !Array.isArray(obj)){
        for(let value in obj){
            if(value === keyName){
                result = obj[value];
                break;
            }else {
                result = helper(obj[value], keyName);
            }
        }
    }
    return result;
}

exports = {
    getPropertyByValue: getPropertyByValue
};