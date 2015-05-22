/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();

    var xl = x.length;
    var result = true;


    for (var i = 0; i < xl / 2; i++) {
        // console.log('x.charAt(i)', x.charAt(i));
        // console.log('x.charAt(xl - 1 - i)', x.charAt(xl - 1 - i));

        if (x.charAt(i) !== x.charAt(xl - 1 - i)) {
            result = false;
            break;
        }
    }

    return result;
};

console.log(isPalindrome(0));
console.log(isPalindrome(1000021));
