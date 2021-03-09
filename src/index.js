exports.min = function min(array) {
    array = array || [];
    return array.reduce(
        (mini, e) => Math.min(e, mini),
        array[0] || 0,
    );
}

exports.max = function max(array) {
    array = array || [];
    return array.reduce(
        (maxi, e) => Math.max(e, maxi),
        array[0] || 0,
    );
}

exports.avg = function avg(array) {
    array = array || [];
    const sum = array.reduce((sum, e) => sum + e, 0);
    return sum / (array.length || 1);
}
