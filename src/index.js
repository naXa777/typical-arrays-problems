exports.min = function min(array = []) {
    return Math.min(0, ...array);
}

exports.max = function max(array = []) {
    return Math.max(0, ...array);
}

exports.avg = function avg(array = []) {
    const sum = array.reduce((sum, e) => sum + e, 0);
    return sum / (array.length || 1);
}
