/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    var note = x > 0 ? 1 : -1;

    var x = x.toString().split('').reverse().join('');

    var result = parseInt(x);

    // Max/Min javascript number (64-bit floating point values)
    // if (result >= Number.MAX_VALUE || result <= Number.MIN_VALUE) {

    // Max/Min for 32-bit signed int
    var max = Math.pow(2, 31) - 1,
        min = -Math.pow(2, 31);
    if (result > max || result < min) {
        result = 0;
    }

    return note * result;
};



console.log(reverse(123));
console.log(reverse(-321));
console.log(reverse(1534236469));
