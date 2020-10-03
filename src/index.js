exports.min = function min(array) {
    if (array && array.length) {
        return Math.min(...array);
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (array && array.length) {
        return Math.max(...array);
    }
    return 0
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0
    }
    let result = 0;
    for (let counter = 0; counter < array.length; counter++) {
        result = result + array[counter];
    }
    return result / array.length;
}
