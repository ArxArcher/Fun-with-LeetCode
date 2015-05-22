/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    // an excellent example
    // return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);

    str = str.trim();

    var newStrTemp = [];

    for (var i = 0; i < str.length; i++) {

        var theChar = str.charAt(i);

        if (theChar.match(/\D/) && !theChar.match(/[\+|\-]/)) {
            break;
        }

        newStrTemp.push(theChar);

    }

    str = newStrTemp.join('');
    console.log('str', str);

    //for 64-bit 
    // var max = Number.MAX_VALUE,
    //     min = Number.MIN_VALUE;
    // for 32 - bit
    var max = Math.pow(2, 31) - 1,
        min = -Math.pow(2, 31);


    // pure number
    if (str.match(/^[\+|\-]?\d+$/)) {
        var num = parseInt(str);
        if (num > max) return max;
        if (num < min) return min;
        return num;
    }


    // ligit operating
    // if (str.match(/\d+[\+|\-]\d+/)) {
    //     // console.log('b');
    //     var num = eval(str);
    //     if (num > max) return max;
    //     if (num < min) return min;
    //     return num;
    // }

    return 0;
};

console.log(myAtoi(" -0012a42")); //12
console.log(myAtoi("2147483648"));
console.log(myAtoi("-2147483648"));

// console.log(myAtoi("9"));
// console.log(myAtoi("3+3+3"));
// console.log(myAtoi("+10-2"));
// console.log(myAtoi("-12"));

// console.log(parseInt("3+3"));
// console.log(eval("3+3"));
