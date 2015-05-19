/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) {
        return true;
    }

    var results = {};

    do {
        var digits = n.toString().split(''),
            sum = 0;

        for (var i in digits) {
            var num = parseInt(digits[i]);
            sum += num * num;
        }

        // console.log('sum', sum);

        if (sum === 1) {
            return true;
        } else if (results[sum] === undefined) {
            results[sum] = 0;
            n = sum;
        } else {
            return false;
        }
    } while (n !== 1);
    return true;
};

console.log(isHappy(19));
console.log(isHappy(4));
