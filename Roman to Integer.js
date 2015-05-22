/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	
    var baseTranslator = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

    var prev = 0,
        result = 0;

    for (var i = s.length - 1; i >= 0; i--) {
        var key = s[i],
            num = baseTranslator[key];

        if (num < prev) {
            result -= num;
        } else {
            result += num;
        }

        prev = num;
    }

    return result;
};

console.log(romanToInt('V'));
console.log(romanToInt('IX'));
console.log(romanToInt('MCMLIV'));
console.log(romanToInt('MCMXC'));
console.log(romanToInt('MDCCCCX'));
console.log(romanToInt('MCMX'));
